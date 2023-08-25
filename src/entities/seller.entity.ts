import { BaseEntity, BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import * as bcrypt from 'bcrypt'

@Entity("Seller")
export class Seller extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        unique: true,
    })
    email: string

    @Column({
        type: 'varchar',
    })
    password: string

    @OneToMany(() => Product, (product) => product.seller)
    products: Product[];

    @BeforeInsert()
    async setPassword(password: string) {
        console.log("calling before insert");

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(this.password, salt);
        this.password = passwordHash;
    }

}