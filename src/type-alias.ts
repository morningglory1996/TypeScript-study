export {};

// 既存の型に別名をつけることができる **先頭は大文字
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'john',
    age: 23
};

type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
    name: 'john',
    age: 23
};

type Profile2 = typeof example1;