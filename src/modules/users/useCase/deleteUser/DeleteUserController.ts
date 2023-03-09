import { Request, Response } from "express";

import  DeleteUser  from "./DeleteUser";

export class DeleteUsersController {
    constructor(private deleteUsers: DeleteUser) {}

    handle(request: Request, response: Response): Response {
        try {
            const { user_id } = request.params;
            
            const user = this.deleteUsers.execute(user_id)
            const deleted = user ? {deleted: true} : {deleted: false}

            return response.status(201).json(deleted);
        } catch (error) {
            console.log(error);
            
            return response.status(400).json({ error })
        }
    }
}