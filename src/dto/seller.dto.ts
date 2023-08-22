import { IsInt, IsNotEmpty, Length } from "class-validator";


export class SellerDTO {

    @IsNotEmpty({ message: 'Name cannot be empty' })
    @Length(2, 20)
    name: string;

    @IsNotEmpty({ message: 'Address cannot be empty' })
    @Length(2, 20)
    address: string;
}