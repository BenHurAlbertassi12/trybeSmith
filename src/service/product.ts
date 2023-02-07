import IProduct from '../interfaces/product';
import * as models from '../models/product';

export async function create(product: IProduct): Promise<IProduct> {
  const createProduct = await models.create(product);
  return createProduct;
}

export async function getAll(): Promise<IProduct[]> {
  const getProduct = await models.getAll();
  return getProduct;
}
