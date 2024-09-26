import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item-view]',
  standalone: true,
  imports: [],
  templateUrl: './row-item-view.component.html'
})
export class RowItemViewComponent {

  @Input() item: Item = new Item();
}
