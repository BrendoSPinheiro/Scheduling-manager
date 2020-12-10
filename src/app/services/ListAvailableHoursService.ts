import { isBefore, isEqual, addDays, isAfter, format, parseISO } from 'date-fns';
import ScheduleRuleRepository from '../repositories/ScheduleRuleRepository';
import AvailableHours from '../models/AvailableHours';
import Interval from '../models/Interval';

interface IntervalDate {
  startDate: Date;
  endDate: Date;
}

class ListAvailableHoursService {
  private availableHours: AvailableHours[];

  private timeInterval: Interval[];

  public execute({ startDate, endDate }: IntervalDate): AvailableHours[] {
    const scheduleRules = ScheduleRuleRepository.findAll();
    this.availableHours = [];

    if (isBefore(endDate, startDate)) {
      throw Error('Start date greater then end date');
    }

    for (let cont = startDate; !isAfter(cont, endDate); cont = addDays(cont, 1)) {
      this.timeInterval = [];
      scheduleRules.map((rule) => {
        if (rule.type === 'specific' && rule.date && isEqual(parseISO(String(rule.date)), cont)) {
          rule.timeInterval.forEach((interval) => {
            this.timeInterval.push(interval);
          });
        } else if (rule.type === 'daily') {
          rule.timeInterval.forEach((interval) => {
            this.timeInterval.push(interval);
          });
        } else if (rule.type === 'weekly' && rule.weekDays && rule.weekDays.length > 0) {
          rule.weekDays.forEach((day) => {
            if (cont.getDay() === day) {
              rule.timeInterval.forEach((interval) => {
                this.timeInterval.push(interval);
              });
            }
          });
        }
      });

      if (this.timeInterval.length > 0) {
        this.availableHours.push({
          date: format(cont, 'dd-MM-yyyy'),
          timeInterval: this.timeInterval,
        });
      }
    }

    return this.availableHours;
  }
}

export default ListAvailableHoursService;
