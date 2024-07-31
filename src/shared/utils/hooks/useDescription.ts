export const useDescription = (description: string): string => {
  description = `${description.slice(0, 150)}...`;
  return description;
};
