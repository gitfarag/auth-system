import { Request, Response, RequestHandler } from "express";
import ProductService from "../services/product.service";

const _product = new ProductService();
const getAllProducts = (async (req: Request, res: Response): Promise<void> => {
  try {
    const allPruducts = await _product.allProducts();
    res.json(allPruducts).status(200);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}) as RequestHandler;

const addProduct = (async (req: Request, res: Response): Promise<void> => {
  try {
    const product = req.body;
    const added = await _product.addProduct(product);
    res.json(added).status(200);
  } catch (error: any) {
    res.send(error.message);
  }
}) as RequestHandler;

const getProductById = (async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.query.id as string;
    const added = await _product.getProductById(parseInt(id));
    res.json(added).status(200);
  } catch (error: any) {
    res.send(error.message);
  }
}) as RequestHandler;

const updateProductByname = (async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const product = req.body;
    const added = await _product.updateProduct(product);
    res.json(added).status(200);
  } catch (error: any) {
    res.send(error.message);
  }
}) as RequestHandler;

const deleteProduct = (async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const deleted = await _product.deleteProductById(parseInt(id));
    res.json(deleted).status(200);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}) as RequestHandler;

export {
  getAllProducts,
  getProductById,
  addProduct, /* {Token Required} */ 
  deleteProduct, /* {Token Required} */ 
  updateProductByname, /* {Token Required} */ 
};
