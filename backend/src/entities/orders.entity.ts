import db from "../providers/database.provider";

export interface Order {
  id?: number;
  uid: number;
  status: string;
}

class OrderEntity {
  // get all orders
  async index(): Promise<Order[]> {
    try {
      const { rows } = await db.query("SELECT * FROM orders");
      return rows;
    } catch (error: any) {
      return error.message;
    }
  }

  // get order by id
  async addOrder(order: Order): Promise<Order[]> {
    const { uid, status } = order;
    const  {rows}  = await db.query(
      "INSERT INTO orders (uid,status) VALUES ($1,$2) RETURNING *",
      [uid, status]
    );
    return rows;
  }

  // add order
  async userOrder(id: number): Promise<Order[]> {
    try {
      const sql = "SELECT * FROM orders WHERE uid = $1";
      const { rows } = await db.query(sql, [id]);
      return rows;
    } catch (error) {
      throw new Error(`couldn't get orders`);
    }
  }

  // update order
  async updateOrder(id: number): Promise<Order[]> {
    try {
      const sql = "UPDATE orders SET status = $1 WHERE uid = $2 RETURNING *";
      const { rows } = await db.query(sql, ["done", id]);
      return rows;
    } catch (error: any) {
      return error.message;
    }
  }

  // delete order
  async deleteOrder(id: number): Promise<Order> {
    try {
      const { rows } = await db.query("DELETE FROM orders WHERE id=$1", [id]);
      return rows[0];
    } catch (err: any) {
      return err?.message;
    }
  }

  // add product to cart
  async addProductToCart(
    uid: number,
    pid: number,
    qty: number
  ): Promise<Order[]> {
    try {
      const sql =
        "INSERT INTO order_product (uid,pid,qty) VALUES ($1,$2,$3) RETURNING *";
      const { rows } = await db.query(sql, [uid, pid, qty]);
      return rows;
    } catch (error: any) {
      return error.message;
    }
  }

  async getProductfromCart(uoi: number): Promise<any> {
    try {
      const sql =
        "SELECT p.name, p.price, o.qty FROM products AS p INNER JOIN order_product AS o ON p.id=o.pid WHERE o.uid=$1";
      const { rows } = await db.query(sql, [uoi]);
      return rows;
    } catch (error: any) {
      return error.message;
    }
  }
}
export default OrderEntity;
