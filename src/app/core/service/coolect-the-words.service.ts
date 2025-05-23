import { Injectable } from '@angular/core';
import { WORDS } from '../../core/config/word-games.config';

@Injectable({
  providedIn: 'root',
})
export class CoolectTheWordsService {
  words = WORDS.slice(0, 1);
  solvedWords = 0;
  totalWords = 1;
  progressPercentage = 0;

  word = this.words[Math.floor(Math.random() * this.words.length)];
  solvedWordsIndices: number[] = [];

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
      return;
    }

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
    if (this.usedLetterMap[index]) return;

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
    if (!letter) return;

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

  checkWord(): boolean {
    const formedWord = this.selectedLetters
      .filter((letter) => letter !== '')
      .join('');

    if (formedWord === this.word.word) {
      const currentWordIndex = this.words.findIndex(
        (w) => w.word === this.word.word
      );

      if (!this.solvedWordsIndices.includes(currentWordIndex)) {
        this.solvedWordsIndices.push(currentWordIndex);
        this.solvedWords++;
        this.updateProgress();
        if (this.solvedWords >= this.totalWords) {
          this.progressPercentage = 100;
          return true;
        }
      }

      this.initializeWord();
      return true;
    }

    return false;
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
