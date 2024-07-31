import type { HallName } from '@/@types/api';

export const getHallName = (name: HallName): string => {
  switch (name) {
    case 'Blue':
      return 'Синий';
    case 'Green':
      return 'Зеленый';
    case 'Red':
      return 'Красный';
    default:
      return '';
  }
};
