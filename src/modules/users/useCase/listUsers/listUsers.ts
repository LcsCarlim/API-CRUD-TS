import { User } from "../../model/User";
import { IUsersRepository } from "../../../../repositories/IUsersRepository";


export default class ListUsers {
    constructor(private usersRepository: IUsersRepository) {}

    execute(): User[] {
        const users = this.usersRepository.list();
        console.log(users);
        

        return users;
  }
}
