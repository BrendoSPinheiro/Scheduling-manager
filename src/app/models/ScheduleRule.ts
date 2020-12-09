import { v4 } from 'uuid';
import Interval from './Interval';

class ScheduleRule {
  id: string;

  type: string;

  date?: Date;

  weekDays?: number[];

  timeInterval: Interval[];

  constructor({ type, timeInterval, date, weekDays }: Omit<ScheduleRule, 'id'>) {
    this.id = v4();
    this.type = type;
    this.date = date;
    this.weekDays = weekDays;
    this.timeInterval = timeInterval;
  }
}

export default ScheduleRule;
