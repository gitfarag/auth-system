import { Router } from "express";
import {
  updateordersById,
  getordersById,
  shoppingCart,
  deleteOrder,
  insertOrder,
  getOreders,
  inCart,
} from "../controllers/orders.controller";
import { authGuard } from "../services/auth.service";

const ordersRouter = Router();

ordersRouter.get("/", authGuard, getOreders);
ordersRouter.get("/shopping-cart/:uoid", authGuard, shoppingCart);
ordersRouter.get("/current/:id", authGuard, getordersById);
ordersRouter.put("/current/update/:id", authGuard, updateordersById);
ordersRouter.post("/create", authGuard, insertOrder);
ordersRouter.post("/order/product", authGuard, inCart);
ordersRouter.delete("/trash/:id", authGuard, deleteOrder);

export default ordersRouter;
