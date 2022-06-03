export const formatDate = (date: string) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  let isoDate = new Date(date).toISOString();
  let newDate = new Date(isoDate);
  let intlDate = new Intl.DateTimeFormat("en-US", options as any).format(
    newDate
  );

  return intlDate;
};
