export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];

let strings: Array<string> = ['tokyo', 'osaka'];

let stirngs2: string[]= ['TypeScript', 'JavaScript'];

let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 20]
];
// ユニオン型
let hairetsu: (number | boolean | string)[] = [1, false, 'japan'];