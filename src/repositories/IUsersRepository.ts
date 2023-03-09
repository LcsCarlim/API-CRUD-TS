  import { User } from "../modules/users/model/User"
  
  export interface ICreateUserDTO {
    name: string;
    old: number;
    email: string;
  }

  export interface IUsersRepository {
    create({ name, old, email }: ICreateUserDTO): User;
    list(): User[];
    findById(id: string): User | undefined;
    findByEmail(email: string): User | undefined;
    update(user: User): User | undefined;
    deleteById(id: string): boolean
  }