import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';

class ListScheduleRuleService {
  public execute() {
    const scheduleRules = ScheduleRuleRepository.findAll();

    return scheduleRules;
  }
}

export default ListScheduleRuleService;
