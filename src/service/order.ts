import OrderModel from '../models/order';
import IOrder from '../interfaces/order';

export default class OrderService {
  model = new OrderModel();

  async getAll(): Promise<IOrder[]> {
    return this.model.getAll();
  }
}
