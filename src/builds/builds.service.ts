import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Build } from './entities/build.entity';
import { ComponentsService } from '../components/components.service';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';

@Injectable()
export class BuildsService {
  constructor(
    @InjectRepository(Build)
    private buildsRepository: Repository<Build>,
    private componentsService: ComponentsService,
  ) {}

  async findAll(userId: string) {
    return this.buildsRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string, userId: string) {
    const build = await this.buildsRepository.findOne({ where: { id } });
    if (!build) throw new NotFoundException('Build not found');
    if (build.userId !== userId) throw new ForbiddenException();
    return build;
  }

  async create(userId: string, dto: CreateBuildDto) {
    const components = await this.componentsService.findByIds(dto.componentIds);
    const totalPrice = components.reduce((sum, c) => sum + Number(c.price), 0);

    const build = this.buildsRepository.create({
      name: dto.name,
      userId,
      components,
      totalPrice,
    });

    return this.buildsRepository.save(build);
  }

  async update(id: string, userId: string, dto: UpdateBuildDto) {
    const build = await this.findOne(id, userId);

    if (dto.name !== undefined) build.name = dto.name;
    if (dto.isFavorite !== undefined) build.isFavorite = dto.isFavorite;

    if (dto.componentIds !== undefined) {
      const components = await this.componentsService.findByIds(dto.componentIds);
      build.components = components;
      build.totalPrice = components.reduce((sum, c) => sum + Number(c.price), 0);
    }

    return this.buildsRepository.save(build);
  }

  async remove(id: string, userId: string) {
    const build = await this.findOne(id, userId);
    await this.buildsRepository.remove(build);
    return { message: 'Build deleted' };
  }

  async getSummary(id: string, userId: string) {
    const build = await this.findOne(id, userId);

    const byType: Record<string, any> = {};
    for (const component of build.components) {
      byType[component.type] = {
        name: component.name,
        brand: component.brand,
        price: component.price,
        specs: component.specs,
      };
    }

    return {
      id: build.id,
      name: build.name,
      isFavorite: build.isFavorite,
      totalPrice: build.totalPrice,
      componentCount: build.components.length,
      components: byType,
      createdAt: build.createdAt,
      updatedAt: build.updatedAt,
    };
  }
}
