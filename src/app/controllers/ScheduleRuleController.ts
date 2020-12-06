import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import CreateScheduleRuleService from '../services/CreateScheduleRuleService';
import ListScheduleRuleService from '../services/ListScheduleRuleService';

class ScheduleRuleController {
  index(request: Request, response: Response) {
    const listScheduleRules = new ListScheduleRuleService();

    const scheduleRules = listScheduleRules.execute();

    return response.status(200).json(scheduleRules);
  }

  store(request: Request, response: Response) {
    try {
      const { type, date, weekDays, timeInterval } = request.body;

      const parsedDate = parseISO(date);

      const createScheduleRule = new CreateScheduleRuleService();

      const newScheduleRule = createScheduleRule.execute(
        type.toLowerCase(), parsedDate, weekDays, timeInterval,
      );

      return response.status(200).json(newScheduleRule);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new ScheduleRuleController();
