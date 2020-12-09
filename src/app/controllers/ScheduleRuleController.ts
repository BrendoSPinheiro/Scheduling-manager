import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import CreateScheduleRuleService from '../services/CreateScheduleRuleService';
import ListScheduleRuleService from '../services/ListScheduleRuleService';
import DeleteScheduleRuleService from '../services/DeleteScheduleRuleService';

class ScheduleRuleController {
  public index(request: Request, response: Response) {
    const listScheduleRules = new ListScheduleRuleService();

    const scheduleRules = listScheduleRules.execute();

    return response.status(200).json(scheduleRules);
  }

  public show(request: Request, response: Response) {
    try {
      const { startDateInterval, endDateInterval } = request.query;
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  public store(request: Request, response: Response) {
    try {
      const { type, date, weekDays, timeInterval } = request.body;

      const parsedDate = parseISO(date);

      const createScheduleRule = new CreateScheduleRuleService();

      const newScheduleRule = createScheduleRule.execute(
        { type, parsedDate, weekDays, timeInterval },
      );

      return response.status(200).json(newScheduleRule);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  public delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const deleteScheduleRule = new DeleteScheduleRuleService();

      deleteScheduleRule.execute(id);

      return response.status(200).json({ message: 'Schedule rule has been deleted' });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default new ScheduleRuleController();
