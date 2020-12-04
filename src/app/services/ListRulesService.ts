import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';

class ListRuleService {
  execute() {
    const rules = ScheduleRuleRepository.findAll();

    return rules;
  }
}

export default ListRuleService;
