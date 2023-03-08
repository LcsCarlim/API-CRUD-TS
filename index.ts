import fastify from "fastify";
import { ICreateUserDTO } from "./CreateUser/Repository";
import { User } from "./CreateUser/User";
import { UserRepository } from "./CreateUser/UserRepository";

const app = fastify();


interface Request {
    name: string;
    old: number;
    email: string;
}

// const User: user = fastify()

// const userRepository = new UserRepository();

// class users implements UserRepository {
//     constructor(private userRepository: UserRepository) {}
//     create({name, old, email}:ICreateUserDTO): User {
//         const createdUser = this.userRepository.create({ name, old, email});

//         return createdUser
//     }

//     list(): User [] {
//         return this.users
//     }
// }


app.get("/", (request, reply) => {
    return { User }
});

app.post("/", async (request, reply) => {
    try {
        const {name, old, email} = request.body as Request;

        const newuserRepository = new UserRepository.

        const createUser = new CreateUser(userRepository)

        const user = createUser.create({ name, old, email })

        // const createdUser = CreateUser.create({ name, old, email });
        reply.code(201).send(user);
    }catch (error) {}
 });

export { app };
// export { CreateUser };
