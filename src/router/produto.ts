import { Router } from 'express';

import * as controller from '../controller/product';

const router = Router();

router.post('/', controller.create);
router.get('/', controller.getAll);

export default router;
