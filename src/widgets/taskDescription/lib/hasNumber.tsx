export const hasNumber = (text: string): boolean => {
  const regex = /\d+/;
  return regex.test(text);
};
