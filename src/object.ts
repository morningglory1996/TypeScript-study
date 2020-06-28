export {};

// objectアノテーションは制約が緩い
let profile1: object = {
    name: 'John'
}

profile1 = {
    age: 23
}

let profile2: { name: string } = { name: 'john' }

// profile2 = { age: 23 } errorになる