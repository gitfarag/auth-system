import OrderEntity, { Order } from "../entities/orders.entity";

const _Entity = new OrderEntity();

class OrderService {
  async getAllOrders(): Promise<Order[]> {
    try {
      const allOrders = await _Entity.index();
      return allOrders;
    } catch (error: any) {
      return error.message;
    }
  }

  async addOrder(order: Order): Promise<Order[]> {
    try {
      const addedOrder = await _Entity.addOrder(order);
      return addedOrder;
    } catch (error: any) {
      return error.message;
    }
  }

  async getUserOrders(id: number): Promise<Order[]> {
    try {
      const UserOrders = await _Entity.userOrder(id);
      return UserOrders;
    } catch (error: any) {
      return error.message;
    }
  }

  async updateUserOrders(id: number): Promise<Order[]> {
    try {
      const UserOrders = await _Entity.updateOrder(id);
      return UserOrders;
    } catch (error: any) {
      return error.message;
    }
  }

  async deleteOrder(id: number): Promise<Order> {
    try {
      const result = await _Entity.deleteOrder(id);
      return result;
    } catch (err: any) {
      return err?.message;
    }
  }

  async addToCart(uid: number, pid: number, qty: number): Promise<Order[]> {
    try {
      const UserOrders = await _Entity.addProductToCart(uid, pid, qty);
      return UserOrders;
    } catch (error: any) {
      return error.message;
    }
  }

  async getFromCart(uoid: number): Promise<any> {
    try {
      const shopping = await _Entity.getProductfromCart(uoid);
      return shopping;
    } catch (error: any) {
      return error.message;
    }
  }
}
export default OrderService;
