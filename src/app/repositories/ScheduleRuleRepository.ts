import Database from '../../database/connection';
import ScheduleRule from '../models/ScheduleRule';

class ScheduleRuleRepository {
  public findAll() {
    const rules = Database.readFile();

    return rules;
  }

  public create(newScheduleRule: ScheduleRule): ScheduleRule {
    const currentScheduleRules = Database.readFile();

    currentScheduleRules.push(newScheduleRule);

    Database.writeFile(currentScheduleRules);

    return newScheduleRule;
  }
}

export default new ScheduleRuleRepository();
