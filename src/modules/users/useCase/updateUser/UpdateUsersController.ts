import { Request, Response } from "express";

import  UpdateUsers  from "../updateUser/UpdateUsers";

export class UpdateUsersController {
    constructor(private updateUsers: UpdateUsers) {}

    handle(request: Request, response: Response): Response {
        try {
            const {user_id} = request.params;
            const {name, old, email} = request.body;

            const users = this.updateUsers.execute({user_id, name, old, email})

            return response.status(201).json(users);
        } catch (error) {
            console.log(error);
            
            return response.status(400).json({ error })
        }
    }
}