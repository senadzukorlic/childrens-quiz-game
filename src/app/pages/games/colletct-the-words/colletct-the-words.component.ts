import { Component } from '@angular/core';
import { CategoryCardsComponent } from '../../../shared/components/category-cards/category-cards.component';
import { GamesHeaderComponent } from '../../../shared/components/games-header/games-header.component';
@Component({
  selector: 'app-colletct-the-words',
  imports: [CategoryCardsComponent, GamesHeaderComponent],
  templateUrl: './colletct-the-words.component.html',
  styleUrl: './colletct-the-words.component.css',
})
export class ColletctTheWordsComponent {}
