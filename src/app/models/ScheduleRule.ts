import Interval from './Interval';

class ScheduleRule {
  id: string;

  type: string;

  date?: Date;

  weekDays?: number[];

  timeInterval: Interval[];
}

export default ScheduleRule;
