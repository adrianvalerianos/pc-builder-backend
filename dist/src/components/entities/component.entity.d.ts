export declare enum ComponentType {
    CPU = "cpu",
    GPU = "gpu",
    RAM = "ram",
    MOTHERBOARD = "motherboard",
    STORAGE = "storage",
    CASE = "case",
    COOLING = "cooling",
    PSU = "psu"
}
export declare class Component {
    id: string;
    name: string;
    type: string;
    brand: string;
    price: number;
    specs: Record<string, any>;
}
