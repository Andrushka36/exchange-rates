export const diff: number = 86400000;

const transformNumber = (number: number): string => number < 10 ? `0${number}` : number.toString();

export const dateToString = (date: Date): string => (
    `${date.getFullYear()}-${transformNumber(date.getMonth() + 1)}-${transformNumber(date.getDate())}`
);

const today: Date = new Date();
const todayUnix: number = today.valueOf();
const dates: string[] = [];

for (let i = 0; i < 14; i++) {
    dates.push(dateToString(new Date(todayUnix - i * diff)));
}

export const listDates = dates;