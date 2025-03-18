import { Component, OnInit } from '@angular/core';
import { categories } from '../../../core/config/cards.config';
import { CategoryCardsComponent } from '../../../shared/components/category-cards/category-cards.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, CategoryCardsComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  categories = categories;

  constructor() {}

  ngOnInit(): void {}
}
