import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Seller } from "./seller.entity";

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

    @ManyToOne(() => Seller, (seller) => seller.products)
    seller: Seller;

}