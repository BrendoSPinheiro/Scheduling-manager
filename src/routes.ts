import { Router } from 'express';

import ScheduleRuleController from './app/controllers/ScheduleRuleController';

const router = Router();

router.get('/rules', ScheduleRuleController.index);

export default router;
