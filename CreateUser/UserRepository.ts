import { ICreateUserDTO, Repository } from "./Repository";
import { User } from "./User";

export class UserRepository implements Repository{
    private users: User []

    private constructor() {
        this.users = []
    }
    public create({ name, old, email}: ICreateUserDTO): User {
        const user = new User();

        Object.assign(user, {
            name,
            old,
            email
        });

        this.users.push(user);

        return user;
    }

    list(): User[] {
        return this.users;
    }
}