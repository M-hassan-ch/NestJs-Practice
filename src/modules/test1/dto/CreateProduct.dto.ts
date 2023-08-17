import { IsInt, IsNotEmpty, isNotEmpty, isString, Length, length } from "class-validator";


export class CreateProductDTO {

    @IsNotEmpty({ message: 'Title cannot be empty' })
    @Length(2, 5)
    title: string;

    @IsInt({ message: 'Price is not a number' })
    price: number;
}