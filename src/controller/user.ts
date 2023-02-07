import { Request, Response } from 'express';
import Service from '../service/user';

class UserController {
  constructor(private userService = new Service()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await this.userService.create(user);
    res.status(201).json(newUser);
  };
}

export default UserController;
