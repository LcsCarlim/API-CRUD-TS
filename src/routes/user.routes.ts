import { Router }  from "express"

import { createUserController } from "../modules/users/useCase/createUser";
import { deleteUserController } from "../modules/users/useCase/deleteUser";
import { getUsersController } from "../modules/users/useCase/getUsers";
import { listUsersController } from "../modules/users/useCase/listUsers";
import { updateUsersController } from "../modules/users/useCase/updateUser";


export const usersRoutes = Router();

usersRoutes.get("/users/:user_id", (request, response) => 
    getUsersController.handle(request, response)
);

usersRoutes.get("/users", (request, response) => 
    listUsersController.handle(request, response)
);

usersRoutes.post("/users", (request, response) =>
    createUserController.handle(request, response) 
 );

usersRoutes.put("/users/:user_id", (request, response) =>
    updateUsersController.handle(request, response)
);

usersRoutes.delete("/users/:user_id", (request, response) => 
    deleteUserController.handle(request, response))
