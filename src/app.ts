import express from 'express';

import produto from './router/produto';
import user from './router/user';
import order from './router/order';

const app = express();

app.use(express.json());

app.use('/products', produto);
app.use('/users', user);
app.use('/orders', order);

export default app;
