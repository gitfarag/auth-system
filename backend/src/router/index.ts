import { Router } from "express";
import authRouter from "./auth.router";
import productRouter from "./product.router";
import ordersRouter from "./order.router";

const router = Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.use("/orders", ordersRouter);

export default router;
