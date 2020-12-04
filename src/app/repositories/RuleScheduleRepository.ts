import Database from '../../database/connection';

class RuleScheduleRepository {
  findAll() {
    const rules = Database.readFile();

    return rules;
  }
}

export default new RuleScheduleRepository();
