import { Component, OnInit } from '@angular/core';
import { categories } from '../../../core/config/config.cards';
import { CategoryCardsComponent} from '../../../shared/components/category-cards/category-cards.component'; // Pretpostavljam da imaš ovu komponentu
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CategoryCardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  categories = categories;

  constructor() { }

  ngOnInit(): void {
  }
}
