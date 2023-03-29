import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class userDto {

    @IsString()
    name: string;

    @IsEmail(undefined,
        {
            message: 'Email invalid'
        })
    @IsNotEmpty({
        message: 'Email is required'
    })
    email: string;

    @MinLength(6, {
        message: 'Usuário deve ter no mínimo 6 caracteres'
    })
    password: string;
}