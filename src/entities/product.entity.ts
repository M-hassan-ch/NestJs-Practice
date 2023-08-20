import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Product")
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
    })
    title: string

    @Column({
        type: 'int',
    })
    price: number

}