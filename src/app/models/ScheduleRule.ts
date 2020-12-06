import Interval from './Interval';

class ScheduleRule {
  id: string;

  type: string;

  date?: Date;

  weekDays?: string[];

  timeInterval: Interval[];
}

export default ScheduleRule;
