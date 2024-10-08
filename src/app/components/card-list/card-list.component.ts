import { Component, Input } from '@angular/core';
import { ItemList } from '../../models/item-list';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  @Input() itemList!: ItemList;
}
