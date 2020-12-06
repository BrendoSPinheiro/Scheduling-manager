import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';

class DeleteScheduleRuleService {
  execute(id: string) {
    const scheduleRuleExists = ScheduleRuleRepository.findById(id);

    if (!scheduleRuleExists) {
      throw Error('schedule rule does not exist');
    }

    ScheduleRuleRepository.delete(id);
  }
}

export default DeleteScheduleRuleService;
