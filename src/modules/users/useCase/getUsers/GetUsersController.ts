import { Request, Response } from "express";

import  GetUsers  from "./GetUsers";

export class GetUsersController {
    constructor(private getUsers: GetUsers) {}

    handle(request: Request, response: Response): Response {
        try {
            const user_id = request.params.user_id;
            console.log(user_id);
            
            const users = this.getUsers.execute( user_id )

            return response.status(201).json(users);
        } catch (error) {
            console.log(error);
            
            return response.status(400).json({ error })
        }
    }
}