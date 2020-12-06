import { v4 } from 'uuid';
import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';
import Interval from '../models/Interval';
import ScheduleRule from '../models/ScheduleRule';

class CreateScheduleRuleService {
  execute(type: string, date: Date, weekDays: number[], timeInterval: Interval[]) {
    if (!type.includes('specific') && !type.includes('daily') && !type.includes('weekly')) {
      throw Error('type is not valid');
    }

    const scheduleRule = new ScheduleRule();

    if (type.includes('specific')) {
      if (!date || timeInterval.length < 1) {
        throw Error('date or time interval is required');
      }

      scheduleRule.id = v4();
      scheduleRule.type = type;
      scheduleRule.date = date;
      scheduleRule.timeInterval = timeInterval;
    } else if (type.includes('daily')) {
      if (timeInterval.length < 1) {
        throw Error('time interval is required');
      }

      scheduleRule.id = v4();
      scheduleRule.type = type;
      scheduleRule.timeInterval = timeInterval;
    } else if (type.includes('weekly')) {
      if (timeInterval.length < 1 || weekDays.length < 1) {
        throw Error('time interval or week days is required');
      }

      scheduleRule.id = v4();
      scheduleRule.type = type;
      scheduleRule.weekDays = weekDays;
      scheduleRule.timeInterval = timeInterval;
    }

    const newScheduleRule = ScheduleRuleRepository.create(scheduleRule);

    return newScheduleRule;
  }
}

export default CreateScheduleRuleService;
