import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user';

export default class UserModel {
  constructor(private connection: Pool) {}

  public async create(user: IUser): Promise<number> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return insertId;
  }
}
