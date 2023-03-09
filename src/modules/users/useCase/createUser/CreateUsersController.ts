import { Response, Request } from "express";

import { CreateUser } from "./CreateUser";

class CreateUserController {
    constructor(private createUser: CreateUser) {}

    handle(request: Request, response: Response): Response {
        try {
            const { name, old, email } = request.body;

            const user = this.createUser.execute({name, old, email});

            return response.status(201).json({
                id: user.id,
                name: user.name,
                old: user.old,
                email: user.email
            });
        } catch (error) {
            return response.status(400).json({ error: "User already exists!"})
        }
    }
}

export { CreateUserController };