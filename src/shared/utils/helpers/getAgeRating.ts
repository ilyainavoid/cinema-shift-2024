export const getAgeRating = (ageRating: string): string => {
  switch (ageRating) {
    case 'G':
      return '0+';
    case 'PG':
      return '6+';
    case 'PG-13':
      return '13+';
    case 'R':
      return '16+';
    case 'NC-17':
      return '18+';
    default:
      return '18+';
  }
};
