import { UsersRepository } from "../../../../repositories/implementations/UsersRepository";
import DeleteUsers from "./DeleteUser";
import { DeleteUsersController } from "./DeleteUserController";

const userRepository = UsersRepository.getInstance();
const deleteUsers = new DeleteUsers(userRepository);
export const deleteUserController = new DeleteUsersController(deleteUsers);