import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ScheduleItem, ScheduleService } from 'src/app/health/shared/services/schedule/schedule.service';
import { Store } from 'src/app/store';

@Component({
  selector: 'schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit, OnDestroy {
  date$!: Observable<Date>;
  schedule$!: Observable<ScheduleItem[]>;
  subscriptions!: Subscription[];

  constructor(private scheduleService: ScheduleService, private store: Store) { }

  ngOnInit(): void {
    this.date$ = this.store.select('date');
    this.schedule$ = this.store.select('schedule');

    this.subscriptions = [
      this.scheduleService.schedule$.subscribe(),
      this.scheduleService.selected$.subscribe(),
    ];
  }

  changeDate(date: Date) {
    this.scheduleService.updateDate(date);
  }

  changeSection(event: any) {
    console.log("event", event)
    this.scheduleService.selectSection(event);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
