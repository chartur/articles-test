import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from "moment";
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {CalendarDayModel} from "../../models/CalendarDayModel";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  leftArrow = faChevronLeft;
  rightArrow = faChevronRight;

  @Input('date') selectedDay: any;
  @Output('onDateSelect') onDateSelect: EventEmitter<CalendarDayModel> = new EventEmitter<CalendarDayModel>();

  public selectedDate: any;

  public monthString: string;
  public weekDays: string[];

  public days: CalendarDayModel[][] = [];
  private calendarDays: any = {};
  private monthDays: any = {};

  constructor() { }

  ngOnInit(): void {
    moment.updateLocale(window.navigator.language, {
      week: {
        dow: 1
      }
    });

    if (!this.selectedDay) {
      this.selectedDay = moment();
    }

    this.selectedDate = this.selectedDay.clone();

    this.weekDays = moment.weekdaysShort(true);
    this.initCalendar();
  }

  initCalendar() {
    this.calendarDays = {
      first: this.selectedDay.clone().startOf('month').startOf('week').date(),
      last: this.selectedDay.clone().endOf('month').date()
    };

    this.monthDays = {
      lastPrevious: this.selectedDay.clone().subtract(1,'months').endOf('month').date(),
      lastCurrent: this.selectedDay.clone().endOf('month').date()
    };

    this.monthString = this.selectedDay.clone().format('MMMM YYYY');

    this.generateCalendar();
  }

  private generateCalendar(): void {

    let { lastCurrent, lastPrevious } = this.monthDays;
    let { first } = this.calendarDays;
    const days = [];

    if(first !== 1) {
      for (let i = first; i <= lastPrevious; i++) {
        days.push({
          d: i,
          active: false,
          date: this.selectedDay.clone().subtract(1,'month').set('date', i)
        })
      }
    }

    for (let i = 1; i <= lastCurrent; i++) {
      days.push({
        d: i,
        date: this.selectedDay.clone().set('date', i),
        active: true
      });
    }

    const fromNextWeek = days.length % 7;

    if(fromNextWeek) {
      for (let i = 1; i <= 7 - fromNextWeek; i++) {
        days.push({
          d: i,
          date: this.selectedDay.clone().add(1, 'month').set('date', i),
          active: false
        });
      }
    }

    this.days = this.chunk(days, 7);
  }

  toNextMonth(): void {
    this.selectedDay = this.selectedDay.add(1, 'month');
    this.initCalendar();
  }

  toPreviousMonth(): void {
    this.selectedDay = this.selectedDay.subtract(1, 'month');
    this.initCalendar();
  }

  selectDay(day: CalendarDayModel): void {
    this.selectedDate = day.date;
    this.onDateSelect.emit(day);
  }

  private chunk(arr: any[], chunkSize: number) {
    const res = [];

    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }

    return res;
  }
}
