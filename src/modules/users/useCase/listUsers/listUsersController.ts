import { Request, Response } from "express";

import  ListUsers  from "./ListUsers";

export class ListUsersController {
    constructor(private listUsers: ListUsers) {}

    handle(request: Request, response: Response): Response {
        try {
            
            const users = this.listUsers.execute()

            return response.status(201).json(users);
        } catch (error) {
            console.log(error);
            
            return response.status(400).json({ error })
        }
    }
}