import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";

@Controller('/user')
export class userController {
    constructor(private users: UsuarioRepository) { }
    @Post()
    async createUser(@Body() dataUser: any) {
        this.users.save(dataUser);
        return {
            status: 'User created',
            data: dataUser
        };
    }

    @Get()
    async listUsers() {
        return this.users.listen();
    }
}