import { Router } from 'express';
import Controller from '../controller/user';

const router = Router();

const uController = new Controller();

router.post('/', uController.create);

export default router;
