import { Repository } from 'typeorm';
import { Component } from './entities/component.entity';
export declare class ComponentsService {
    private componentsRepository;
    constructor(componentsRepository: Repository<Component>);
    findAll(): Promise<Component[]>;
    findByType(type: string): Promise<Component[]>;
    findByIds(ids: string[]): Promise<Component[]>;
}
