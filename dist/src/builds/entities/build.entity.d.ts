import { User } from '../../users/entities/user.entity';
import { Component } from '../../components/entities/component.entity';
export declare class Build {
    id: string;
    name: string;
    userId: string;
    user: User;
    isFavorite: boolean;
    totalPrice: number;
    components: Component[];
    createdAt: Date;
    updatedAt: Date;
}
