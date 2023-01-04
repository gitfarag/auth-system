import { Router } from "express";
import {
  loginHandler,
  registerHandler,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/auth.controller";
import { authGuard } from "../services/auth.service";

const authRouter = Router();

authRouter.post(
  "/register", // ? URI
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  registerHandler // ? Controller
);

authRouter.post(
  "/login", // ? URI
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  loginHandler // ? Controller
);
authRouter.get(
  "/all",
  // authGuard, // ? URI
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  getUsers // ? Controller
);

authRouter.put(
  "/update",
  authGuard, // ? URI
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  updateUser // ? Controller
);
authRouter.delete(
  "/delete",
  authGuard,
  // ? URI
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  deleteUser
  // ? Controller
);

export default authRouter;
