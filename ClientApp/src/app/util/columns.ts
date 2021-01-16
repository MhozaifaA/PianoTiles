
export const columns = {
  one: "one",
  two: "two",
  three: "three",
  four: "four",
}

let keyEnter = 13;
let keyF = 102;
let keyG = 103;
let keyK = 107;
let keyL = 108;

export var getKeyCode = (column): number => {
  switch (column) {
    case columns.one:
      return keyF;
    case columns.two:
      return keyG;
    case columns.three:
      return keyK;
    case columns.four:
      return keyL;
  }
}

export var getColumn = (keycode): string => {
  switch (keycode) {
    case keyF:
      return columns.one;
    case keyG:
      return columns.two;
    case keyK:
      return columns.three;
    case keyL:
      return columns.four;
  }
}


