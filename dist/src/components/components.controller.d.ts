import { ComponentsService } from './components.service';
export declare class ComponentsController {
    private componentsService;
    constructor(componentsService: ComponentsService);
    findAll(): Promise<import("./entities/component.entity").Component[]>;
    findCpus(): Promise<import("./entities/component.entity").Component[]>;
    findGpus(): Promise<import("./entities/component.entity").Component[]>;
    findRam(): Promise<import("./entities/component.entity").Component[]>;
    findMotherboards(): Promise<import("./entities/component.entity").Component[]>;
    findStorage(): Promise<import("./entities/component.entity").Component[]>;
    findCases(): Promise<import("./entities/component.entity").Component[]>;
    findCooling(): Promise<import("./entities/component.entity").Component[]>;
    findPsus(): Promise<import("./entities/component.entity").Component[]>;
}
