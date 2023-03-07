import fastify from "fastify";
import { User } from "./CreateUser/User";
import { UserRepository } from "./CreateUser/UserRepository";

interface Request {
    name: string;
    year: number;
    email: string;
}

// const User: user = fastify()
const app = fastify();

const userRepository = new UserRepository();

class CreateUser {
    constructor(private userRepository: UserRepository) {}
    execute({name, year, email}:Request): User {
        const createdUser = this.userRepository.create({ name, year, email});

        return createdUser
    }
}

app.get("/", (request, reply) => {
    return { User }
});

app.post("/", async (request, reply) => {
    const {name, year, email} = request.body as Request;

    try {
        const createdUser = userRepository.execute({ name, year, email });
        reply.code(201).send(createdUser);
    }catch (error) {}
 });

export { app };
export { CreateUser };