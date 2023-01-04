import { Request, Response, RequestHandler } from "express";
import AuthService from "../services/auth.service";

const _authService = new AuthService();

const registerHandler = (async (req: Request, res: Response): Promise<void> => {
  try {
    const {username,password} = req.body;
    const registeredUser = await _authService.register({username,password});
    res.status(200).json(registeredUser);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}) as RequestHandler;

const loginHandler = (async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;
    const loggedUser = await _authService.login(user);
    res.status(201).json(loggedUser);
  } catch (error: any) {
    res.status(500).json(error.message);
  }
}) as RequestHandler;

const getUsers = (async (req: Request, res: Response): Promise<void> => {
  try {
    const allUsers = await _authService.getall();
    res.json(allUsers).status(200);
  } catch (error: any) {
    res.status(500).send("error?.message");
  }
}) as RequestHandler;

const updateUser = (async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;
    const deleteUser = await _authService.updateuser(user);
    res.json(deleteUser).status(200);
  } catch (error) {
    throw new Error("error happened in ctrl ");
  }
}) as RequestHandler;

const deleteUser = (async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;
    const deleteUser = await _authService.deleteUser(user);
    res.json(deleteUser).status(200);
  } catch (error) {
    throw new Error("error happened in ctrl ");
  }
}) as RequestHandler;
export { registerHandler, loginHandler, getUsers, deleteUser, updateUser };
