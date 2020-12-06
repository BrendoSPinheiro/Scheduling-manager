import Database from '../../database/connection';
import ScheduleRule from '../models/ScheduleRule';

class ScheduleRuleRepository {
  public findAll() {
    const rules = Database.readFile();

    return rules;
  }

  public findById(id: string) : ScheduleRule {
    const scheduleRules = Database.readFile() as ScheduleRule[];

    const findScheduleRule = scheduleRules.find((rule) => rule.id === id);

    return findScheduleRule as ScheduleRule;
  }

  public create(newScheduleRule: ScheduleRule): ScheduleRule {
    const currentScheduleRules = Database.readFile();

    currentScheduleRules.push(newScheduleRule);

    Database.writeFile(currentScheduleRules);

    return newScheduleRule;
  }

  public delete(id: string) {
    const currentScheduleRules = Database.readFile() as ScheduleRule[];

    const ScheduleRules = currentScheduleRules.filter((rule) => rule.id !== id);

    Database.writeFile(ScheduleRules);
  }
}

export default new ScheduleRuleRepository();
