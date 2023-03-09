import { User } from "../../model/User";
import { IUsersRepository } from "../../../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    old: number;
    email: string;
}

class CreateUser {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ name, old, email}: IRequest): User {
        const user = this.usersRepository.findByEmail(email);

        if (user) {
            throw new Error("User already exists!");
          }
        const createdUser = this.usersRepository.create({ name, old, email});


        return createdUser
    }
}

export { CreateUser }