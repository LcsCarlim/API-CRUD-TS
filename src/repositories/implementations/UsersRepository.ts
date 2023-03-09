import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";
import { User } from "../../modules/users/model/User";

export class UsersRepository implements IUsersRepository{
    private users: User [];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE
    }

     create({ name, old, email}: ICreateUserDTO): User {
        const user = new User();

        Object.assign(user, {
            name,
            old,
            email
        });

        this.users.push(user);

        return user;
    }

    findById(id: string): User | undefined {
        const user = this.users.find((users) => users.id === id);
    
        return user;
    }

    deleteById(id: string): boolean {
        const user = this.users.find((users) => users.id === id)

        const index = this.users.indexOf(user);
        
        this.users.splice(index, 1)

        return true;
    }

    list(): User[] {
        return this.users;
    }

    findByEmail(email: string): User | undefined {
        const user = this.users.find((users) => users.email ===email);

        return user
    }

    update(user: User): User | undefined {
        const nUser = this.users.find((users) => users.id === user.id);

        if (!nUser) {
            throw new Error("User doesnt exists");
          }

        nUser.name = user.name
        nUser.old = user.old
        nUser.email = user.email          

        return nUser;
    }
}