import { Request, Response } from 'express';
import ListRulesService from '../services/ListRulesService';

class ScheduleRuleController {
  index(request: Request, response: Response) {
    const listRules = new ListRulesService();

    const rules = listRules.execute();

    return response.status(200).json(rules);
  }
}

export default new ScheduleRuleController();