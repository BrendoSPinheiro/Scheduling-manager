import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';
import ScheduleRule from '../models/ScheduleRule';

class ListScheduleRuleService {
  public execute(): ScheduleRule[] {
    const scheduleRules = ScheduleRuleRepository.findAll();

    return scheduleRules;
  }
}

export default ListScheduleRuleService;
