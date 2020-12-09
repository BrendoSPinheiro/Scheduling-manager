import { Router } from 'express';

import ScheduleRuleController from './app/controllers/ScheduleRuleController';

const router = Router();

router.get('/rules', ScheduleRuleController.index);

router.get('/rules', ScheduleRuleController.show);

router.post('/rules', ScheduleRuleController.store);

router.delete('/rules/:id', ScheduleRuleController.delete);

export default router;
