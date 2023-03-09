import { UsersRepository } from "../../../../repositories/implementations/UsersRepository";
import  ListUsers  from "./ListUsers";
import { ListUsersController } from "./ListUsersController";

const userRepository = UsersRepository.getInstance();
const listUsers = new ListUsers(userRepository);
export const listUsersController = new ListUsersController(listUsers);
