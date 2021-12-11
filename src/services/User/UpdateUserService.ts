import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUpdateUserRequest {
  id: string;
  email?: string;
  password?: string;
  name?: string;
  bio?: string;
  phone?: string;
}

export class UpdateUserService {
  async execute({
    id,
    bio = "",
    email = "",
    password = "",
    phone = "",
    name = "",
  }: IUpdateUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne(id);

    if (!user) {
      throw new Error("User does not exists");
    }

    let hashPassword = password;
    if (password) {
      hashPassword = await hash(password, 8);
    }

    const updateUser = await usersRepositories.update(id, {
      email: email || user.email,
      password: hashPassword || user.password,
      name: name || user.name,
      bio: bio || user.bio,
      phone: phone || user.phone,
    });

    return updateUser;
  }
}
