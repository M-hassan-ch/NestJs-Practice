import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, Length } from "class-validator";


export class CreateProductDTO {

    @ApiProperty({
        description: "The name of product",
        example: 'Plastic Table'
    })
    @IsNotEmpty({ message: 'Title cannot be empty' })
    @Length(2, 5)
    title: string;

    @ApiProperty({
        description: "The price of product",
        example: 100
    })
    @IsInt({ message: 'Price is not a number' })
    price: number;
    
}