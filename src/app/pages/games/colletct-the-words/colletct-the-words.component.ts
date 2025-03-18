import { Component } from '@angular/core';
import { CategoryCardsComponent } from '../../../shared/components/category-cards/category-cards.component';
import { CommonModule } from '@angular/common';
import { WORDS } from '../../../core/config/word-games.config';
import { HeadersComponent } from '../../../shared/components/headers/headers.component';

@Component({
  selector: 'app-colletct-the-words',
  imports: [CategoryCardsComponent, CommonModule, HeadersComponent],
  templateUrl: './colletct-the-words.component.html',
  styleUrl: './colletct-the-words.component.css',
})
export class ColletctTheWordsComponent {
  words = WORDS;
  word = this.words[Math.floor(Math.random() * this.words.length)];

  permutedWord: string[] = [];
  randomPermutation: string = '';
  selectedLetters: string[] = [];
  currentWordIndex: number = 0;
  usedLetterMap: { [key: number]: boolean } = {};
  selectedToOriginalMap: { [key: number]: number } = {};

  constructor() {
    this.permutedWord = this.generatePermutations(this.word.word.split(''));
    this.randomPermutation =
      this.permutedWord[Math.floor(Math.random() * this.permutedWord.length)];
    this.selectedLetters = Array(this.randomPermutation.length).fill('');
  }

  generatePermutations(array: string[]): string[] {
    let result: string[] = [];
    if (array.length === 1) return array;
    for (let i = 0; i < array.length; i++) {
      const currentChar = array[i];
      const remainingChars = array.slice(0, i).concat(array.slice(i + 1));

      const remainingPermutations = this.generatePermutations(remainingChars);

      for (const perm of remainingPermutations) {
        result.push(currentChar + perm);
      }
    }

    return result;
  }

  onLetterClick(letter: string, index: number): void {
    if (this.usedLetterMap[index]) {
      return;
    }

    const firstEmptyIndex = this.selectedLetters.findIndex(
      (slot) => slot === ''
    );

    if (firstEmptyIndex !== -1) {
      this.selectedLetters[firstEmptyIndex] = letter;

      this.usedLetterMap[index] = true;

      this.selectedToOriginalMap[firstEmptyIndex] = index;

      this.currentWordIndex++;
    }
  }

  unClickLetter(letter: string, index: number): void {
    if (!letter) {
      return;
    }

    const originalIndex = this.selectedToOriginalMap[index];

    this.usedLetterMap[originalIndex] = false;

    delete this.selectedToOriginalMap[index];

    this.selectedLetters[index] = '';

    this.currentWordIndex--;
  }

  resetSelection(): void {
    this.selectedLetters = Array(this.randomPermutation.length).fill('');
    this.currentWordIndex = 0;
    this.usedLetterMap = {};
    this.selectedToOriginalMap = {};
  }

  checkWord(): void {
    const formedWord = this.selectedLetters
      .filter((letter) => letter !== '')
      .join('');

    if (formedWord === this.word.word) {
      console.log('Tačna reč!');

      this.word = this.words[Math.floor(Math.random() * this.words.length)];
      this.permutedWord = this.generatePermutations(this.word.word.split(''));
      this.randomPermutation =
        this.permutedWord[Math.floor(Math.random() * this.permutedWord.length)];
      this.resetSelection();
    } else {
      console.log('Netačna reč!');
    }
  }

  skipWord(): void {
    this.word = this.words[Math.floor(Math.random() * this.words.length)];
    this.permutedWord = this.generatePermutations(this.word.word.split(''));
    this.randomPermutation =
      this.permutedWord[Math.floor(Math.random() * this.permutedWord.length)];
    this.resetSelection();
  }
}
