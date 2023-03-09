import { UsersRepository } from "../../../../repositories/implementations/UsersRepository";
import UpdateUsers from "./UpdateUsers";
import { UpdateUsersController } from "./UpdateUsersController";

const userRepository = UsersRepository.getInstance()
const updateUsers = new UpdateUsers(userRepository)
export const updateUsersController = new UpdateUsersController(updateUsers)