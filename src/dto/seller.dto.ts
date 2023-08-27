import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, Length } from "class-validator";


export class SellerDTO {

    @ApiProperty({
        description: "The email of seller",
        example: 'harry123@gmail.com'
    })
    @IsNotEmpty({ message: 'Email cannot be empty' })
    @Length(2, 20)
    email: string;

    @ApiProperty({
        description: "The password of seller",
        example: 'abc123'
    })
    @IsNotEmpty({ message: 'Password cannot be empty' })
    @Length(2, 20)
    password: string;
}