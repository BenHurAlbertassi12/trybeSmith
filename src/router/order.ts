import express from 'express';
import Controller from '../controller/order';

const router = express.Router();
const order = new Controller();

router.route('/').get((req, res) => order.getAll(req, res));

export default router;
