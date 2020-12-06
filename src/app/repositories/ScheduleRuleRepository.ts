import Database from '../../database/connection';
import ScheduleRule from '../models/ScheduleRule';

class ScheduleRuleRepository {
  findAll() {
    const rules = Database.readFile();

    return rules;
  }

  create(newScheduleRule: ScheduleRule) {
    const currentScheduleRules = Database.readFile();

    currentScheduleRules.push(newScheduleRule);

    Database.writeFile(currentScheduleRules);

    return newScheduleRule;
  }
}

export default new ScheduleRuleRepository();
