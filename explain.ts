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
  words = WORDS.slice(0, 10); // Ograničavamo na 10 riječi
  solvedWords = 0; // Brojač riješenih riječi
  totalWords = 10; // Ukupan broj riječi
  progressPercentage = 0; // Procenat napretka

  word = this.words[Math.floor(Math.random() * this.words.length)];
  solvedWordsIndices: number[] = []; // Pratimo indekse riješenih riječi

  permutedWord: string[] = [];
  randomPermutation: string = '';
  selectedLetters: string[] = [];
  currentWordIndex: number = 0;
  usedLetterMap: { [key: number]: boolean } = {};
  selectedToOriginalMap: { [key: number]: number } = {};

  constructor() {
    this.initializeWord();
  }

  initializeWord(): void {
    if (this.solvedWordsIndices.length >= this.totalWords) {
      this.progressPercentage = 100;
      console.log('Čestitamo! Riješili ste sve riječi!');

      // Možda prikaži poruku umjesto nove riječi
      // ili dodaj dugme za ponovno igranje
      return; // Važno - izađi iz funkcije da ne inicijalizira novu riječ
    }

    // Ako su sve riječi riješene, resetujemo igru
    if (this.solvedWordsIndices.length === this.totalWords) {
      this.solvedWordsIndices = [];
      this.solvedWords = 0;
      this.progressPercentage = 0;
    }

    // Biramo nasumičnu riječ koju još nismo riješili
    let availableIndices = Array.from(
      { length: this.words.length },
      (_, i) => i
    ).filter((index) => !this.solvedWordsIndices.includes(index));

    if (availableIndices.length > 0) {
      const randomIndex =
        availableIndices[Math.floor(Math.random() * availableIndices.length)];
      this.word = this.words[randomIndex];
    }

    this.permutedWord = this.generatePermutations(this.word.word.split(''));
    this.randomPermutation =
      this.permutedWord[Math.floor(Math.random() * this.permutedWord.length)];
    this.selectedLetters = Array(this.randomPermutation.length).fill('');
    this.currentWordIndex = 0;
    this.usedLetterMap = {};
    this.selectedToOriginalMap = {};
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

      // Pronađi indeks trenutne riječi
      const currentWordIndex = this.words.findIndex(
        (w) => w.word === this.word.word
      );

      // Ako riječ još nije označena kao riješena, dodaj je
      if (!this.solvedWordsIndices.includes(currentWordIndex)) {
        this.solvedWordsIndices.push(currentWordIndex);
        this.solvedWords++;
        this.updateProgress();
      }

      // Prelazimo na sljedeću riječ
      this.initializeWord();
    } else {
      console.log('Netačna reč!');
    }
  }

  skipWord(): void {
    this.initializeWord();
  }

  updateProgress(): void {
    this.progressPercentage = (this.solvedWords / this.totalWords) * 100;
  }

  resetGame(): void {
    this.solvedWordsIndices = [];
    this.solvedWords = 0;
    this.progressPercentage = 0;
    this.initializeWord();
  }
}
