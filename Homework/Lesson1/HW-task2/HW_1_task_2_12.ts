// //#dYQNrBV
// let arr: any[] = [1, -2, 'name', '', [], [true, false], -12, 12312, 'string', {}];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// console.log(arr);
//
// //#LARqoUj5I
//
// type BookType = {
//     title: string,
//     pageCount: number,
//     genre: string
// }
//
// let book1: BookType = {
//     title: 'Book Title 1',
//     pageCount: 120,
//     genre: 'horror'
// };
// let book2: BookType = {
//     title: 'Book Title 2',
//     pageCount: 257,
//     genre: 'documentary'
// };
// let book3: BookType = {
//     title: 'Book Title 3',
//     pageCount: 541,
//     genre: 'fantasy'
// };

// #sA3Gg1sCp

type BookType = {
    title: string,
    pageCount: number,
    genre: string
    authors: AuthorType[]
}
type AuthorType = {
    name: string,
    age: number
}

let book1: BookType = {
    title: 'Book Title 1',
    pageCount: 120,
    genre: 'horror',
    authors:[
        {
            name: 'John',
            age: 19
        },
        {
            name: 'Tom',
            age: 22
        }
    ]
};
let book2: BookType = {
    title: 'Book Title 2',
    pageCount: 352,
    genre: 'documentary',
    authors: [
        {
            name: 'Jane',
            age: 60
        },
        {
            name: 'Lui',
            age: 70
        }
    ]
};
let book3: BookType = {
    title: 'Book Title 3',
    pageCount: 555,
    genre: 'historical',
    authors: [
        {
            name: 'Larry',
            age: 50
        },
        {
            name: 'Gary',
            age: 66
        },
        {
            name: 'Mary',
            age: 32
        }
    ]
};