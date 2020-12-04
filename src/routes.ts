import { Router } from 'express';

import RuleScheduleController from './app/controllers/RuleScheduleController';

const router = Router();

router.get('/rules', RuleScheduleController.index);

export default router;
