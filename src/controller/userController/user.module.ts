import { Module } from "@nestjs/common";
import { userController } from "./user.controller";
import { UsuarioRepository } from "./usuario.repository";

@Module({
    imports: [],
    controllers: [userController],
    providers: [UsuarioRepository],
})
export class UserModule { }