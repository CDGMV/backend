// Authenticate pode ser utilizado para a consulta de Jogos

// import { compare } from "bcryptjs";
// import { sign } from "jsonwebtoken";
// import { getCustomRepository } from "typeorm";
// import { GamesRepositories } from "../../repositories/GamesRepositories";
// require("dotenv").config();

// export class AuthenticateGameService {
//   async execute(name: string) {
//     const gamesRepositories = getCustomRepository(GamesRepositories);

//     const game = await gamesRepositories.findOne({ name });

//     if (!game) {
//       throw new Error("Name Incorrect");
//     }
  
//   }
// }
