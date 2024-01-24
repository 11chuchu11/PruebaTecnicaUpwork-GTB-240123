/* eslint-disable @typescript-eslint/no-explicit-any */
export function randomDate() {

  const actualDate:any = new Date();

  const limit:any = new Date();
  limit.setMonth(actualDate.getMonth() - 3);

  const randomDays = Math.floor(Math.random() * (actualDate - limit) / (24 * 60 * 60 * 1000));

  return new Date(new Date(limit).setDate(limit.getDate() + randomDays)).toISOString()
}