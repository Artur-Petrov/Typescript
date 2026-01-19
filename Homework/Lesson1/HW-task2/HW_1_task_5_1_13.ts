// #I2XsG6f
//
// – створити функцію, яка обчислює та повертає площу прямокутника зі сторонами а і б

// const rectangleSquare = (a: number, b: number): number => a * b;
// console.log(rectangleSquare(5, 6));

// #ETGAxbEn8l
//
// – створити функцію, яка обчислює та повертає площу кола з радіусом r

// const circleSquare = (radius: number): number => Math.PI * radius * radius;
// console.log(circleSquare(5));

// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r

// const cylinderSquare = (radius: number, height: number): number => 2 * Math.PI * radius * (height + radius);
// console.log(cylinderSquare(3, 5));

// #SIdMd0hQ
//
// – створити функцію, яка приймає масив та виводить кожен його елемент

// const arrayOutput = (array: any[]): void => {
//     for (const item of array) {
//         console.log(item);
//     }
// }

// #59g0IsA
//
// – створити функцію, яка створює параграф з текстом. Текст задати через аргумент

// const paragraphFactory = (text: string): void =>{
//     document.write(`<p>${text}</p>`)
// };
// paragraphFactory('hello world');

// #hOL6126
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// const listFactory = (text: string): void => {
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`)
// };
// listFactory('hello world');

// #0Kxco1edSN
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const listFactory = (text: string, liNum: number): void => {
//   document.write(`<ul>`);
//   for (let i = 0; i < liNum ; i++) {
//     document.write(`<li>${text}</li>`);
//   }
//   document.write(`</ul>`);
// };
// listFactory('hello world', 5);

// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// type ArrType = string | boolean | number;
//
// const arrayList = (arr: ArrType[]): void =>{
//   document.write(`<ul>`)
//   for (const arrElement of arr) {
//     document.write(`<li>${arrElement}</li>`)
//   }
//   document.write(`</ul>`)
// }
// arrayList([1, 2, -3, 'qwerty', true]);

// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

// type ArrType = {
//     id: number;
//     name: string;
//     age: number;
// }
//
// const arrayList = (arr: ArrType[]): void =>{
//   for (const arrItem of arr) {
//     document.write(`<div>${arrItem.id} ${arrItem.name} ${arrItem.age}</div>`);
//   }
// }
// arrayList([
//   {id: 1, name: 'Tom', age: 18},
//   {id: 2, name: 'Lui', age: 19},
//   {id: 3, name: 'Eric', age: 20},
//   {id: 4, name: 'Brain', age: 21},
//   {id: 5, name: 'Ivan', age: 22}
// ]);

// #pghbnSB
//
// – створити функцію, яка повертає найменше число з масиву

// const leastNum = (arr: number[]): number =>{
//   let result: number = arr[0];
//   for (const item of arr) {
//     if (item < result){
//         result = item;
//     }
//   }
//   return result;
// }
// console.log(leastNum([-8, 1, 2, -12, 0, -2, -37, -15]));
//
// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// const sum = (arr: number[]): number =>{
//   let result: number = 0;
//   for (const item of arr) {
//     result += item;
//   }
//   return result;
// }
// console.log(sum([1, 2, 10]));

// #kpsbSQCt2Lf
//
// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// const swap = (arr: number[] ,index1: number,index2: number): number[] => {
//   let temp: number = arr[index1];
//   arr[index1] = arr[index2];
//   arr[index2] = temp;
//
//   return arr;
// }
// console.log(swap([11, 22, 33, 44], 1, 2));
//
// #mkGDenYnNjn
//
// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

// type CurrencyValue = {
//     currency: string;
//     value: number;
// }
//
// const exchange = (sumUAH: number ,currencyValues: CurrencyValue[],exchangeCurrency: string): number => {
//     let chosenCurrency;
//     for (const i of currencyValues) {
//         if(i.currency === exchangeCurrency){
//             chosenCurrency = i;
//         }
//     }
//     if(chosenCurrency){
//         return sumUAH/chosenCurrency.value;
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));