import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';

class ListScheduleRuleService {
  execute() {
    const scheduleRules = ScheduleRuleRepository.findAll();

    return scheduleRules;
  }
}

export default ListScheduleRuleService;
