import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity("Seller")
export class Seller extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
    })
    name: string

    @Column({
        type: 'varchar',
    })
    address: string

    @OneToMany(() => Product, (product) => product.seller)
    products: Product[];

}