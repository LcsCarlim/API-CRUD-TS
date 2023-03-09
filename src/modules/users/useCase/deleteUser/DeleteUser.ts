import { IUsersRepository } from "../../../../repositories/IUsersRepository";
import { User } from "../../model/User";
import { Response, Request} from "express"


export default class DeleteUsers {
    constructor(private usersRepository: IUsersRepository) {}

    execute( user_id : string): boolean {
        const user = this.usersRepository.findById(user_id)
        
        if (!user) {
            throw new Error('User not found | exists')
        }

        const result = this.usersRepository.deleteById(user_id);

        return result;
  }
}