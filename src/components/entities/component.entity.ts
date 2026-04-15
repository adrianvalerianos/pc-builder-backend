import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum ComponentType {
  CPU = 'cpu',
  GPU = 'gpu',
  RAM = 'ram',
  MOTHERBOARD = 'motherboard',
  STORAGE = 'storage',
  CASE = 'case',
  COOLING = 'cooling',
  PSU = 'psu',
}

@Entity()
export class Component {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  brand: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('simple-json')
  specs: Record<string, any>;
}
