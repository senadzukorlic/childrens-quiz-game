type Category = {
  id: number;
  title: string;
  icon: string;
  route: string;
};

export const categories: Category[] = [
  {
    id: 1,
    title: 'Collect the Words',
    icon: 'assets/icons/overview/A.svg',
    route: '/lessons/colletct-the-words',
  },
  {
    id: 2,
    title: 'Mixing Colours',
    icon: 'assets/icons/overview/rainbow.svg',
    route: '/lessons',
  },
  {
    id: 3,
    title: 'Matching Numbers',
    icon: 'assets/icons/overview/numbers.svg',
    route: '/lessons',
  },
  {
    id: 4,
    title: 'Super Shapes',
    icon: '/assets/icons/overview/card-shapes.svg',
    route: '/lessons',
  },
  {
    id: 5,
    title: 'All About Me',
    icon: '/assets/icons/overview/books.svg',
    route: '/lessons',
  },
  {
    id: 6,
    title: 'Feelings',
    icon: '/assets/icons/overview/question.svg',
    route: '/lessons',
  },
  {
    id: 7,
    title: 'Greetings',
    icon: '/assets/icons/overview/chat.svg',
    route: '/lessons',
  },
  {
    id: 8,
    title: 'Animals',
    icon: '/assets/icons/overview/cat.svg',
    route: '/lessons',
  },
  // {
  //   id: 9,
  //   title: 'Back To School',
  //   icon: '/assets/icons/overview/school.svg',
  //   route: '/lessons',
  // },
  // {
  //   id: 10,
  //   title: 'Body',
  //   icon: '/assets/icons/overview/person.svg',
  //   route: '/lessons',
  // },
  // {
  //   id: 11,
  //   title: 'Home',
  //   icon: '/assets/icons/overview/house.svg',
  //   route: '/lessons',
  // },
  // {
  //   id: 12,
  //   title: 'Transport',
  //   icon: '/assets/icons/overview/car.svg',
  //   route: '/lessons',
  // },
];
