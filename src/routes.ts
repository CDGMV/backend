import { Router } from "express";
import authenticateUserController from "./controllers/User/authenticateUserController";
import createUserController from "./controllers/User/createUserController";
import listUserController from "./controllers/User/listUserController";
import updateUserController from "./controllers/User/updateUserController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

routes.post("/users", createUserController.handle);
routes.post("/login", authenticateUserController.handle);

routes.put("/user", ensureAuthenticated, updateUserController.handle);

routes.get("/user", ensureAuthenticated, listUserController.handle);

export default routes;
