import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carro {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  marca: string

  @Column()
  modelo: string

  @Column()
  hp: number

}