import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IRequestUser {
  email: string;
  password: string;
}

export class CreateUserService {
  async execute({ email, password }: IRequestUser) {
    if (!email) {
      throw new Error("Email Invalid");
    }

    if (!password) {
      throw new Error("Password Invalid");
    }

    const usersRepositories = getCustomRepository(UsersRepositories);

    const userAlreadyExists = await usersRepositories.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepositories.create({
      name: "",
      bio: "",
      email,
      password: passwordHash,
      phone: "",
      photo: "",
    });

    await usersRepositories.save(user);

    return user;
  }
}
