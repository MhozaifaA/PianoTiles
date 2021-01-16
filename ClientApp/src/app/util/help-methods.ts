import { columns } from "./columns";
import { Promise } from 'es6-promise'

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function randomNextInt(min, max): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function randomColumn(): string {
  switch (randomNextInt(1, 4)) {
    case 1:
      return columns.one;
    case 2:
      return columns.two;
    case 3:
      return columns.three;
    case 4:
      return columns.four;
    default: return "";
  }
}
