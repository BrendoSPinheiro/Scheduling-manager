import { uuid } from 'uuidv4';

import Interval from './Interval';

class ScheduleRule {
  id: string;

  date?: Date;

  weekDays?: string[];

  timeInterval: Interval[];

  constructor(date: Date, weekDays: string[], timeInterval: Interval[]) {
    this.id = uuid();
    this.date = date;
    this.weekDays = weekDays;
    this.timeInterval = timeInterval;
  }
}

export default ScheduleRule;
