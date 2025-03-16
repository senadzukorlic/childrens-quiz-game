export type Words = {
  id: number;
  word: string;
  letters: string[];
};

export const WORDS: Words[] = [
  {
    id: 1,
    word: 'banana', // todo: permute the letters
    letters: ['n', 'b', 'a', 'a', 'n', 'a'],
  },
  {
    id: 2,
    word: 'rabbit',
    letters: ['b', 't', 'r', 'i', 'a', 'b'],
  },
  {
    id: 3,
    word: 'yellow',
    letters: ['o', 'l', 'w', 'l', 'y', 'e'],
  },
  {
    id: 4,
    word: 'winter',
    letters: ['n', 'r', 't', 'w', 'e', 'i'],
  },
  {
    id: 5,
    word: 'garden',
    letters: ['d', 'r', 'a', 'g', 'n', 'e'],
  },
  {
    id: 6,
    word: 'circle',
    letters: ['c', 'e', 'r', 'c', 'l', 'i'],
  },
  {
    id: 7,
    word: 'pencil',
    letters: ['n', 'c', 'p', 'e', 'l', 'i'],
  },
  {
    id: 8,
    word: 'purple',
    letters: ['r', 'p', 'p', 'u', 'e', 'l'],
  },
  {
    id: 9,
    word: 'butterfly',
    letters: ['f', 'b', 'y', 'r', 't', 't', 'u', 'l', 'e'],
  },
  {
    id: 10,
    word: 'elephant',
    letters: ['h', 'a', 'e', 'p', 't', 'l', 'e', 'n'],
  },
  {
    id: 11,
    word: 'strawberry',
    letters: ['b', 'w', 'r', 't', 'r', 'e', 's', 'y', 'a', 'r'],
  },
  {
    id: 12,
    word: 'umbrella',
    letters: ['r', 'b', 'l', 'l', 'a', 'm', 'e', 'u'],
  },
  {
    id: 13,
    word: 'chocolate',
    letters: ['o', 'c', 'h', 'o', 'a', 'e', 'c', 't', 'l'],
  },
];
