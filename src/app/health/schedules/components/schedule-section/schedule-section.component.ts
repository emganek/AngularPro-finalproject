import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScheduleItem } from 'src/app/health/shared/services/schedule/schedule.service';

@Component({
  selector: 'schedule-section',
  templateUrl: './schedule-section.component.html',
  styleUrls: ['./schedule-section.component.scss']
})
export class ScheduleSectionComponent {
  @Input()
  name!: string;

  @Input()
  section!: ScheduleItem;

  @Output()
  select = new EventEmitter<any>();

  onSelect(type: string, assigned: any[] = []) {
    const data = this.section;
    this.select.emit({
      type,
      assigned,
      data
    });
  }
}
