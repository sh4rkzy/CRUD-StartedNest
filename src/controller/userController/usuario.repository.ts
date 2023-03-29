import { Injectable } from "@nestjs/common";

@Injectable()
export class UsuarioRepository {
    private users = [];

    async save(user: any) {
        this.users.push(user);
    }

    async listen() {
        return this.users;
    }
}