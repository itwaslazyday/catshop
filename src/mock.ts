import { Good } from './types/types';

const goods: Good[] = [
  {
    id: 1,
    title: 'Нямушка',
    taste: 'фуа-гра',
    portions: 10,
    giftQty: 1,
    netWeight: '0,5',
    description: 'Печень утки разварная с артишоками.',
    isAvailable: true
  },
  {
    id: 2,
    title: 'Нямушка',
    taste: 'рыбой',
    portions: 40,
    giftQty: 2,
    netWeight: '2',
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    isAvailable: true
  },
  {
    id: 3,
    title: 'Нямушка',
    taste: 'курой',
    portions: 100,
    giftQty: 5,
    netWeight: '5',
    resume: 'Заказчик доволен',
    description: 'Филе из цыплят с трюфелями в бульоне.',
    isAvailable: false
  },
];

export {goods};
