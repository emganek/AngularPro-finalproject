import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'schedule-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-controls.component.html',
  styleUrls: ['./schedule-controls.component.scss']
})
export class ScheduleControlsComponent {

  offset = 0;
  @Input() selected!: Date;
  constructor() {
  }

  @Output()
  move = new EventEmitter<number>();

  moveDate(offset: number) {
    this.offset = offset;
    this.move.emit(offset);
  }
}
