import { Request, Response, RequestHandler } from "express";
import OrderService from "../services/orders.service";

const _oreders = new OrderService();

const getOreders = (async (req: Request, res: Response): Promise<void> => {
  try {
    const gettAllOrders = await _oreders.getAllOrders();
    res.json(gettAllOrders).status(200);
  } catch (error: any) {
    res.send(error?.message).status(500);
  }
}) as RequestHandler;

const insertOrder = (async (req: Request, res: Response): Promise<void> => {
  try {
    const order = req.body;
    const addOrder = await _oreders.addOrder(order);
    res.json(addOrder).status(200);
  } catch (error: any) {
    res.json(error.message);
  }
}) as RequestHandler;

const getordersById = (async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const added = await _oreders.getUserOrders(parseInt(id));
    res.json(added).status(200);
  } catch (error: any) {
    res.send(error.message);
  }
}) as RequestHandler;

const updateordersById = (async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    console.log(id);
    const added = await _oreders.updateUserOrders(parseInt(id));
    res.json(added).status(200);
  } catch (error: any) {
    res.send(error.message);
  }
}) as RequestHandler;

const deleteOrder = (async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const deleted = await _oreders.deleteOrder(parseInt(id));
    res.json(deleted).status(200);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}) as RequestHandler;

const inCart = (async (req: Request, res: Response): Promise<void> => {
  try {
    const { uid, pid, qty } = req.body;
    const added = await _oreders.addToCart(uid, pid, qty);
    res.json(added).status(200);
  } catch (error: any) {
    res.send(error.message);
  }
}) as RequestHandler;

const shoppingCart = (async (req: Request, res: Response): Promise<void> => {
  try {
    const { uoid } = req.params;
    const added = await _oreders.getFromCart(parseInt(uoid));
    res.json(added).status(200);
  } catch (error: any) {
    res.send(error.message);
  }
}) as RequestHandler;

export {
  getOreders,
  insertOrder,
  getordersById,
  updateordersById,
  deleteOrder,
  inCart,
  shoppingCart,
};
