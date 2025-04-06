import { Component } from '@angular/core';
import { CoolectTheWordsService } from '../../../core/service/coolect-the-words.service';
import { CategoryCardsComponent } from '../../../shared/components/category-cards/category-cards.component';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from '../../../shared/components/headers/headers.component';
import { AchievementComponent } from '../../../shared/components/achievement/achievement.component';

@Component({
  selector: 'app-colletct-the-words',
  standalone: true,
  imports: [
    CategoryCardsComponent,
    CommonModule,
    HeadersComponent,
    AchievementComponent,
  ],
  templateUrl: './colletct-the-words.component.html',
  styleUrl: './colletct-the-words.component.css',
})
export class ColletctTheWordsComponent {
  constructor(public wordGame: CoolectTheWordsService) {}

  onLetterClick(letter: string, index: number): void {
    this.wordGame.onLetterClick(letter, index);
  }

  unClickLetter(letter: string, index: number): void {
    this.wordGame.unClickLetter(letter, index);
  }

  checkWord(): void {
    const correct = this.wordGame.checkWord();
    console.log(correct ? 'Tačna reč!' : 'Netačna reč!');
  }

  skipWord(): void {
    this.wordGame.skipWord();
  }

  resetGame(): void {
    this.wordGame.resetGame();
  }

  resetSelection(): void {
    this.wordGame.resetSelection();
  }
}
