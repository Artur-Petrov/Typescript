// let aa: number = 123;
// let bb: boolean = true;
// let cc: string = 'abc';
//
// function foo(arg1: number, arg2: number):number {
//     return arg1 + arg2;
// }
//
// let arr: number[] = [];
// arr.push(1);

// Type

// type UserType = {
//     name: string,
//     age: number,
//     status: boolean
//     asd?: number // ? означає необов'язкове поле
// };
//
// let users: UserType[] = [
//     {name: 'vasya', age: 31, status: false, asd: 123},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// Type methods

// type UserType = {
//     name: string,
//     age: number,
//     status: boolean
//     greeting:(str: string)=>string
// };
//
// let users: UserType[] = [
//     {greeting:(str)=> 'hello' ,name: 'vasya', age: 31, status: false},
//     {greeting:(str)=> 'hi' ,name: 'petya', age: 30, status: true}
// ];

// опис моделей данних
// перше це Interface

// interface IUser {
//     name: string,
//     age: number,
//     status: boolean
//     greeting:(str: string)=>string
// }
//
// let users: IUser[] = [
//     {greeting:(str)=> 'hello' ,name: 'vasya', age: 31, status: false},
//     {greeting:(str)=> 'hi' ,name: 'petya', age: 30, status: true}
// ];

// друге це Class

class User {

    // робимо конструктор

    constructor(public name: string,public age: number,public status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }

    greeting(){
        console.log('Hello World');
}
}
//створюємо юзера
let user = new User('Tom', 12, true);

let users: User[] = [
    new User('Bond', 44, false)
];
console.log(users);