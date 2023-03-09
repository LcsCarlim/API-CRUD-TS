import { User } from "../../model/User";
import { IUsersRepository } from "../../../../repositories/IUsersRepository";



export default class GetUsers {
    constructor(private usersRepository: IUsersRepository) {}

    execute( user_id : string): User | undefined {
        const user = this.usersRepository.findById(user_id);

        if (!user){
            throw new Error("User not exists!")

        }
        return user;
  }
}
