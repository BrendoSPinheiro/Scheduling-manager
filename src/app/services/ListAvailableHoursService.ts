import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';

interface IntervalDate {
  startDate: Date;
  endDate: Date;
}

class ListAvailableHoursService {
  public execute({ startDate, endDate }: IntervalDate) {
    const scheduleRules = ScheduleRuleRepository.findAll();
  }
}

export default ListAvailableHoursService;
