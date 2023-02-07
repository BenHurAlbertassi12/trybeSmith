import { RowDataPacket } from 'mysql2';
import connection from './connection';

import IOrder from '../interfaces/order';

const query = `SELECT o.id, 
  o.user_id AS userId, 
  JSON_ARRAYAGG(p.id) AS productsIds
  FROM Trybesmith.orders AS o 
  JOIN Trybesmith.products AS p 
  ON p.order_id = o.id
  GROUP BY o.id

  `;

export default class OrderModel {
  connection = connection;

  async getAll(): Promise<IOrder[]> {
    const [products] = await this.connection.execute<(IOrder & RowDataPacket)[]
    >(query);

    return products;
  }
}
