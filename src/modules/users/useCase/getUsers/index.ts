import { UsersRepository } from "../../../../repositories/implementations/UsersRepository";
import  ListUsers  from "./GetUsers";
import { GetUsersController } from "./GetUsersController";

const userRepository = UsersRepository.getInstance();
const getUsers = new ListUsers(userRepository);
export const getUsersController = new GetUsersController(getUsers);
