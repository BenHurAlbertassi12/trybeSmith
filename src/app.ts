import express from 'express';

import produto from './router/produto';
import user from './router/user';

const app = express();

app.use(express.json());

app.use('/products', produto);
app.use('/users', user);

export default app;
