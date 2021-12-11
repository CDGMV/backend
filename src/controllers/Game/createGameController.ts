import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { CreateGamerService } from "../../services/Gamer/CreateGamerService";

export default {
  async handle(req: Request, res: Response) {
    const { name, genre, ageRestriction, price, platform, description, logo } = req.body;

    const createGameService = new CreateGameService();

    const game = await createGameService.execute({
      name, 
      genre, 
      ageRestriction, 
      price, 
      platform, 
      description, 
      logo,
    });

    // const authenticateGameService = new AuthenticateGameService();

    // const token = await authenticateUserService.execute(email, password);

    // const data = instanceToPlain(user);

    // return res.status(201).send({ ...data, token });
  },
};