import { Request, Response } from 'express';
import Service from '../service/order';

export default class OrderController {
  oService = new Service();

  async getAll(_req: Request, res: Response) {
    const order = await this.oService.getAll();
    res.status(200).json(order);
  }
}
