import { Repository } from 'typeorm';
import { Build } from './entities/build.entity';
import { ComponentsService } from '../components/components.service';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';
export declare class BuildsService {
    private buildsRepository;
    private componentsService;
    constructor(buildsRepository: Repository<Build>, componentsService: ComponentsService);
    findAll(userId: string): Promise<Build[]>;
    findOne(id: string, userId: string): Promise<Build>;
    create(userId: string, dto: CreateBuildDto): Promise<Build>;
    update(id: string, userId: string, dto: UpdateBuildDto): Promise<Build>;
    remove(id: string, userId: string): Promise<{
        message: string;
    }>;
    getSummary(id: string, userId: string): Promise<{
        id: string;
        name: string;
        isFavorite: boolean;
        totalPrice: number;
        componentCount: number;
        components: Record<string, any>;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
