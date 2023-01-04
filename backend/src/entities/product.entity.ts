import db from "../providers/database.provider";

interface Product {
  id?: number;
  name: string;
  cat: string;
  price: number;
  qty: number;
}

class ProductEntity {
  async index(): Promise<Product[]> {
    try {
      const { rows } = await db.query("SELECT * FROM products ");
      return rows;
    } catch (error: any) {
      return error?.message;
    }
  }

  async addProduct(product: Product): Promise<Product> {
    try {
      const { rows } = await db.query(
        "INSERT INTO products (name,cat,price,qty) VALUES ($1,$2,$3,$4) RETURNING *",
        [product.name, product.cat, product.price, product.qty]
      );
      return rows[0];
    } catch (error: any) {
      return error.message;
    }
  }

  async getProductById(pID: number): Promise<Product> {
    try {
      const { rows } = await db.query("SELECT * FROM products WHERE id = $1", [
        pID,
      ]);
      return rows[0];
    } catch (error: any) {
      return error.message;
    }
  }

  // update Product
  async updateProduct(product: Product): Promise<Product> {
    try {
      const { name, qty } = product;
      const sql = "UPDATE products SET qty = $1 WHERE name = $2 RETURNING *";
      const { rows } = await db.query(sql, [qty, name]);
      return rows[0];
    } catch (error: any) {
      return error.message;
    }
  }

  async deleteProductbyId(id: number): Promise<string> {
    try {
      await db.query("DELETE FROM products WHERE id = $1", [id]);
      return "product deleted";
    } catch (error: any) {
      return error.message;
    }
  }
}
export { Product };
export default ProductEntity;
