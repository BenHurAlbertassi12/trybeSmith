import * as jwt from 'jsonwebtoken';
import IToken from '../interfaces/token';
import IUser from '../interfaces/user';
import connection from '../models/connection';
import UserModel from '../models/user';

class UserService {
  userModel = new UserModel(connection);

  public async create(user: IUser): Promise<IToken> {
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET as string,
    );

    await this.userModel.create(user);
    return { token };
  }
}

export default UserService;
