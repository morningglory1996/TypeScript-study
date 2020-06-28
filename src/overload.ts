export {};

// シグネチャー: 関数の名前、引数、返り値の型を宣言
function double(value: number): number;
function double(value: string): string;

// 引数にはnumberかstring　それ以外ははじく
function double(value: any): any {
  if(typeof value === "number") {
    return value * 2;
  } else {
    return value + value ;
  }
}

// function double(value: string): string {
//   return value + value ;
// }

console.log(double(100));
console.log(double('GO '));

function double2(value: number | string): number | string {
  if(typeof value === "number") {
    return value * 2;
  } else {
    return value + value ;
  }
}

console.log(double2(876));
console.log(double2('HELLO '));