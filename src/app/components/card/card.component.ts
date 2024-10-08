import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';
import { NgClass, NgOptimizedImage, NgStyle } from '@angular/common';
import { AspectRatio, Style } from '../../models/item-list';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgStyle, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() item!: Item;
  @Input() aspectRatio: AspectRatio = '1x1';
  @Input() style: Style = 'full';
}
