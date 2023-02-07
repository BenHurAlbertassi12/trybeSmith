import IProduct from '../interfaces/product';
import * as models from '../models/product';

export async function create(product: IProduct): Promise<IProduct> {
  return models.create(product);
}

export async function getAll(): Promise<IProduct[]> {
  return models.getAll();
}
