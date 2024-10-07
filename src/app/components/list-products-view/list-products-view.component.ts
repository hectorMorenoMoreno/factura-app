import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemViewComponent } from '../row-item-view/row-item-view.component';

@Component({
  selector: 'list-products-view',
  standalone: true,
  imports: [RowItemViewComponent],
  templateUrl: './list-products-view.component.html'
})
export class ListProductsViewComponent {

  @Input() items: Item[] = [];
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();

  onRemoveList(id: number){
    this.removeEventEmitter.emit(id);
  }
}
