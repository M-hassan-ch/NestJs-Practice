import { IsInt, IsNotEmpty, Length } from "class-validator";


export class SellerDTO {

    @IsNotEmpty({ message: 'Name cannot be empty' })
    @Length(2, 20)
    email: string;

    @IsNotEmpty({ message: 'Password cannot be empty' })
    @Length(2, 20)
    password: string;
}