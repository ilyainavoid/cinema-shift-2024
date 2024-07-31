import type { HallTimeslots, ScheduleSeance } from '@/@types/api';

export const getHallTimeslots = (seances: ScheduleSeance[]): HallTimeslots => {
  const hallTimeslots: HallTimeslots = {
    red: [],
    green: [],
    blue: []
  };

  seances.forEach((seance) => {
    const { hall } = seance;
    switch (hall.name) {
      case 'Red':
        hallTimeslots.red.push(seance);
        break;
      case 'Green':
        hallTimeslots.green.push(seance);
        break;
      case 'Blue':
        hallTimeslots.blue.push(seance);
        break;
      default:
        break;
    }
  });

  return hallTimeslots;
};
