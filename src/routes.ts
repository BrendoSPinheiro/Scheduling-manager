import { Router } from 'express';

import ScheduleRuleController from './app/controllers/ScheduleRuleController';

const router = Router();

router.get('/rules', ScheduleRuleController.index);

router.post('/rules', ScheduleRuleController.store);

export default router;
