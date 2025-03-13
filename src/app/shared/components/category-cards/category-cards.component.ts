import { Component, Input } from '@angular/core';
import {NgClass} from '@angular/common'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-cards',
  imports: [
    NgClass,CommonModule
  ],
  templateUrl: './category-cards.component.html',
  styleUrl: './category-cards.component.css',
})
export class CategoryCardsComponent {
  @Input() title: string = '';
  @Input() iconSrc: string = '';
  @Input() iconPosition: 'left' | 'center' | 'right' = 'right';
  @Input() iconWidth: number = 70;
  @Input() iconHeight: number = 70;
  @Input() backgroundColor: string = '#FFFFFF';
  @Input() cardWidth: number = 377;
  @Input() cardHeight: number = 200;
}
