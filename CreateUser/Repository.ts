  import { User } from "./User"
  
  export interface ICreateUserDTO {
    name: string;
    old: number;
    email: string;
  }

  export interface Repository {
    create({ name, old, email }: ICreateUserDTO): User;
    list(): User[]
  }
  