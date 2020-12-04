import RuleScheduleRepository from '../repositories/RuleScheduleRepository';

class ListRuleService {
  execute() {
    const rules = RuleScheduleRepository.findAll();

    return rules;
  }
}

export default ListRuleService;
