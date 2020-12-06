import { v4 } from 'uuid';

import Interval from './Interval';

class ScheduleRule {
  id: string;

  type: string;

  date?: Date;

  weekDays?: string[];

  timeInterval: Interval[];

  constructor(type: string, timeInterval: Interval[], date?: Date, weekDays?: string[]) {
    this.id = v4();
    this.type = type;
    this.date = date;
    this.weekDays = weekDays;
    this.timeInterval = timeInterval;
  }
}

export default ScheduleRule;
