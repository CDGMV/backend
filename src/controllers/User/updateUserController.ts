import { Request, Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateUserService";

export default {
  async handle(req: Request, res: Response) {
    const { email, password, bio, phone, name } = req.body;
    const { user_id } = req;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      id: user_id,
      bio,
      name,
      email,
      password,
      phone,
    });

    res.json({ ...user, message: "Success Updated" });
  },
};
