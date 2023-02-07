import express from 'express';

import produto from './router/produto';

const app = express();

app.use(express.json());

app.use('/products', produto);

export default app;
