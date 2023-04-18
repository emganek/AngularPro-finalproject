import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from '../../services/meals/meals.service';

@Component({
  selector: 'list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item!: Meal;
  @Output() remove = new EventEmitter<any>();
  toggled = false;

  constructor() { }

  ngOnInit(): void {
    console.log("item ne", this.item);
    // console.log("item ne name", this.item.val());
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  getRoute(item: any) {
    return [
      `../${item.ingredients ? 'meals' : 'workouts'}`,
      item.$key
    ];
  }
}
