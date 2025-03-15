import { Component } from '@angular/core';
import { CategoryCardsComponent } from '../../../shared/components/category-cards/category-cards.component';
import { GamesHeaderComponent } from '../../../shared/components/games-header/games-header.component';
import { CommonModule } from '@angular/common';
import { WORDS } from '../../../core/config/config.word-game';
@Component({
  selector: 'app-colletct-the-words',
  imports: [CategoryCardsComponent, GamesHeaderComponent, CommonModule],
  templateUrl: './colletct-the-words.component.html',
  styleUrl: './colletct-the-words.component.css',
})
export class ColletctTheWordsComponent {
  words = WORDS;
}
