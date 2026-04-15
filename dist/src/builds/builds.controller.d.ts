import { BuildsService } from './builds.service';
import { CreateBuildDto } from './dto/create-build.dto';
import { UpdateBuildDto } from './dto/update-build.dto';
export declare class BuildsController {
    private buildsService;
    constructor(buildsService: BuildsService);
    findAll(req: any): Promise<import("./entities/build.entity").Build[]>;
    create(req: any, dto: CreateBuildDto): Promise<import("./entities/build.entity").Build>;
    findOne(id: string, req: any): Promise<import("./entities/build.entity").Build>;
    update(id: string, req: any, dto: UpdateBuildDto): Promise<import("./entities/build.entity").Build>;
    remove(id: string, req: any): Promise<{
        message: string;
    }>;
    getSummary(id: string, req: any): Promise<{
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
