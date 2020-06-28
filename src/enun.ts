export {};

// enum 列挙された要素に番号を付与する
enum Months {
  January = 1,
  Febuary,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.Febuary);

// const MonthsJs = {
//   January: 0,
//   Febuary: 1
// };

enum Colors {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#00000F'
}

let green = Colors.GREEN;
console.log({ green });

enum Colors {
  YELLOW = '#FFFF00'
}

// 要素を追加
console.log(Colors.YELLOW);