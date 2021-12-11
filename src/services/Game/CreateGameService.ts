import { getCustomRepository } from "typeorm";
import { GamesRepositories } from "../../repositories/GamesRepositories";
import { hash } from "bcryptjs";

interface IRequestGame {
  name: string;
  genre: string;
  ageRestriction: bigint;
  price: number;
  platform: string;
  description: string;
  logo: string;
}

export class CreateGameService {
  async execute({
    name,
    genre,
    ageRestriction,
    price,
    platform,
    description,
    logo,
  }: IRequestGame) {
    if (!name) {
      throw new Error("Name Invalid");
    }

    if (!genre) {
      throw new Error("Genre Invalid");
    }

    if (!ageRestriction) {
      throw new Error("Age Restriction Invalid");
    }

    if (!price) {
      throw new Error("Price Invalid");
    }

    if (!platform) {
      throw new Error("Platform Invalid");
    }

    if (!description) {
      throw new Error("Description Invalid");
    }

    if (!logo) {
        throw new Error("Logo Invalid");
    }
  

    const gamesRepositories = getCustomRepository(GamesRepositories);

    const gameAlreadyExists = await gamesRepositories.findOne({ name });    

    if (gameAlreadyExists) {
      throw new Error("Game Already Exists");
    }
    
    const game = gamesRepositories.create({
      name: name,
      genre: genre,
      ageRestriction: ageRestriction,
      price: price,
      platform: platform,
      description: description,
      logo: logo,
      users_id: null,
    });

    await gamesRepositories.save(game);

    return game;
  }
}
