import { Request, Response } from 'express';
import * as productService from '../service/product';

export async function create(req: Request, res: Response) {
  const proBody = req.body;
  const productCreated = await productService.create(proBody);
  res.status(201).json(productCreated);
}

export async function getAll(_req: Request, res: Response) {
  const getProduct = await productService.getAll();
  res.status(200).json(getProduct);
}
