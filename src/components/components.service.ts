import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Component } from './entities/component.entity';

@Injectable()
export class ComponentsService {
  constructor(
    @InjectRepository(Component)
    private componentsRepository: Repository<Component>,
  ) {}

  async findAll() {
    return this.componentsRepository.find({ order: { brand: 'ASC', name: 'ASC' } });
  }

  async findByType(type: string) {
    return this.componentsRepository.find({
      where: { type },
      order: { price: 'ASC' },
    });
  }

  async findByIds(ids: string[]) {
    if (ids.length === 0) return [];
    return this.componentsRepository.findBy({ id: In(ids) });
  }
}
