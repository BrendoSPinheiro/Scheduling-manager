const zeroFill = (n: number) => (n < 9 ? `0${n}` : `${n}`);

export const parseDate = (date: Date) => {
  const day = zeroFill(date.getDate() + 1);
  const month = zeroFill(date.getMonth() + 1);
  const year = zeroFill(date.getFullYear());

  return `${day}-${month}-${year}`;
};
