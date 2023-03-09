import { IUsersRepository } from "../../../../repositories/IUsersRepository";
import { User } from "../../model/User";

interface IRequest {
    user_id: string;
    name: string;
    old: number;
    email: string;
  }

export default class UpdateUsers {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id, name, old, email }: IRequest): User {
        const user = this.usersRepository.findById(user_id);        

        if (!user){
          throw new Error(`User not exists! ${user_id}`)
        }

        const updateUser = this.usersRepository.update({ id: user.id, name, old, email  })

        if (updateUser === undefined) {
          throw new Error("Error updating user");
        }

        return updateUser;
  }
}