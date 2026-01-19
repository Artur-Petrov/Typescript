// #I2XsG6f
//

// function calcRectangle (a: number, b: number): number {
//     return a * b;
// }
// console.log(calcRectangle(4, 8));
// //
// #ETGAxbEn8l
//

// function calcCircle (radius: number): number {
//     return radius * radius * Math.PI;
// }
// console.log(calcCircle(5));
//
// #Mbiz5K4yFe7
//

// function calcCylinder (radius: number, height: number): number {
//     return 2 * Math.PI * radius * (height + radius);
// }
// console.log(calcCylinder(3, 5));
//
// #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент
// function arrayOutput (arr: any[]): void {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }

// #59g0IsA
//

// function paragraphFactory(text: string): void {
//     document.write(`<p>${text}</p>`);
// }
// paragraphFactory('Hello World');
//
// #hOL6126
//

// function list(liText: string): void {
//     document.write(`
//         <ul>
//               <li>${liText}</li>
//               <li>${liText}</li>
//               <li>${liText}</li>
//         </ul>
//     `)
// }
// list('qwerty');
//
// #0Kxco1edSN
//
// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
// function list(liText: string, liNum: number): void {
//     document.write(`<ul>`);
//     for (let i = 0; i < liNum; i++) {
//         document.write(`<li>${liText}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('qwerty', 5);
//
// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
// type PrimitiveType = boolean | string | number;
// function arrayList(array: PrimitiveType[]): void{
//     document.write(`<ul>`);
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arrayList([1, 2, -3, true, 'qwerty']);
//
// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
// type UserType = {
//     id: number;
//     name: string;
//     age: number
// }
//
// function arrayPrint(users: UserType[]): void {
//     for (const user of users) {
//         document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
//     }
// }
// arrayPrint([
//     {id: 1, name: 'Tom', age: 18},
//     {id: 2, name: 'Lui', age: 19},
//     {id: 3, name: 'Stive', age: 20},
//     {id: 4, name: 'Bond', age: 21}
// ]);
//
// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

// function leastNum(nums: number[]): number {
//     let min: number = nums[0];
//     for (const num of nums) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }
// console.log(leastNum([1, 2, 3, 4, 5, -8, 0, -1]));
//
// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum (arr: number[]): number {
//     let res: number = 0;
//     for (const arrElement of arr) {
//         res += arrElement;
//     }
//     return res;
// }
// console.log(sum([1, 2, 10]));
//
// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap (arr: number[], index1: number, index2: number): number[] | string{
//     let temp: number = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));
//
// #mkGDenYnNjn.html
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
// type CurrencyValueType = {
//     currency: string;
//     value: number;
// }
//
// function exchange(sumUAH: number ,currencyValues: CurrencyValueType[],exchangeCurrency: string): number{
//     let selectedCurrency;
//     for (const i of currencyValues) {
//         if (i.currency === exchangeCurrency) {
//             selectedCurrency = i;
//         }
//     }
//     if (selectedCurrency) {
//         return sumUAH/selectedCurrency.value;
//     }
//     return -1;
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'EUR'));