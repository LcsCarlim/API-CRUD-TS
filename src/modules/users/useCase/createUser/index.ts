import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUsersController";
import { UsersRepository } from "../../../../repositories/implementations/UsersRepository";

const userRepository = UsersRepository.getInstance();
const createUser = new CreateUser(userRepository);
const createUserController = new CreateUserController(createUser);

export { createUserController };