import Database from '../../database/connection';

class ScheduleRuleRepository {
  findAll() {
    const rules = Database.readFile();

    return rules;
  }
}

export default new ScheduleRuleRepository();
