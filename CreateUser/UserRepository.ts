import { User } from "./User"

interface CreateUserDTO {
    name: string;
    year: number;
    email: string;
  }
  
  interface UserRepository {
    create({ name, year, email }: CreateUserDTO): User 
  }
  
  export { UserRepository, CreateUserDTO };