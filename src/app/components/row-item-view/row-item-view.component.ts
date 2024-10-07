import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item-view]',
  standalone: true,
  imports: [],
  templateUrl: './row-item-view.component.html'
})
export class RowItemViewComponent {

  @Input() item: Item = new Item();
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemove(id: number){
    this.removeEventEmitter.emit(id);
  }
}
