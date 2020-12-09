import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';
import Interval from '../models/Interval';
import ScheduleRule from '../models/ScheduleRule';

interface CreateScheduleRuleDTO {
  type: string;
  parsedDate: Date;
  weekDays: number[];
  timeInterval: Interval[];
}

class CreateScheduleRuleService {
  execute({ type, parsedDate, weekDays, timeInterval }: CreateScheduleRuleDTO) {
    if (!type.includes('specific') && !type.includes('daily') && !type.includes('weekly')) {
      throw Error('type is not valid');
    }

    let scheduleRule;

    if (type.includes('specific')) {
      if (!parsedDate || !timeInterval || timeInterval.length < 1) {
        throw Error('date or time interval is required');
      }

      scheduleRule = new ScheduleRule(type, timeInterval, parsedDate);
    } else if (type.includes('daily')) {
      if (!timeInterval || timeInterval.length < 1) {
        throw Error('time interval is required');
      }

      scheduleRule = new ScheduleRule(type, timeInterval);
    } else {
      if (!timeInterval || !weekDays || timeInterval.length < 1 || weekDays.length < 1) {
        throw Error('time interval or week days is required');
      }

      scheduleRule = new ScheduleRule(type, timeInterval, undefined, weekDays);
    }

    const newScheduleRule = ScheduleRuleRepository.create(scheduleRule);

    return newScheduleRule;
  }
}

export default CreateScheduleRuleService;
