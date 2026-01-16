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

// type BookType = {
//     title: string,
//     pageCount: number,
//     genre: string
//     authors: AuthorType[]
// }
// type AuthorType = {
//     name: string,
//     age: number
// }
//
// let book1: BookType = {
//     title: 'Book Title 1',
//     pageCount: 120,
//     genre: 'horror',
//     authors:[
//         {
//             name: 'John',
//             age: 19
//         },
//         {
//             name: 'Tom',
//             age: 22
//         }
//     ]
// };
// let book2: BookType = {
//     title: 'Book Title 2',
//     pageCount: 352,
//     genre: 'documentary',
//     authors: [
//         {
//             name: 'Jane',
//             age: 60
//         },
//         {
//             name: 'Lui',
//             age: 70
//         }
//     ]
// };
// let book3: BookType = {
//     title: 'Book Title 3',
//     pageCount: 555,
//     genre: 'historical',
//     authors: [
//         {
//             name: 'Larry',
//             age: 50
//         },
//         {
//             name: 'Gary',
//             age: 66
//         },
//         {
//             name: 'Mary',
//             age: 32
//         }
//     ]
// };

// #jCHFnEbdmFd

// type UserType = {
//     name: string;
//     username: string;
//     password: string;
// }
//
// let users: UserType[] = [
//     {name: 'John', username: 'Hardy', password: '1231'},
//     {name: 'Tom', username: 'Cruise', password: '1232'},
//     {name: 'Jordan', username: 'Michel', password: '1233'},
//     {name: 'Berlin', username: 'Munich', password: '1234'},
//     {name: 'Andrii', username: 'Schevchenko', password: '1235'},
//     {name: 'Ivan', username: 'Franko', password: '1236'},
//     {name: 'Lesia', username: 'Ukrainka', password: '1237'},
//     {name: 'Lionel', username: 'Messi', password: '1238'},
//     {name: 'Stepan', username: 'Giga', password: '1239'},
//     {name: 'Pavlo', username: 'Zibrov', password: '12310'}
// ];
// console.log(users[0]['password']);
// console.log(users[1]['password']);
// console.log(users[2]['password']);
// console.log(users[3]['password']);
// console.log(users[4]['password']);
// console.log(users[5]['password']);
// console.log(users[6]['password']);
// console.log(users[7]['password']);
// console.log(users[8]['password']);
// console.log(users[9]['password']);
//
// #coYydZuaeEB
//
// type WeatherTempsType = {
//   day: string;
//   morning: number;
//   daytime: number;
//   evening: number;
// };
//
// let weatherTemps: WeatherTempsType[] = [
//     {day: 'Monday', morning: 6, daytime: 15, evening: 8},
//     {day: 'Tuesday', morning: 4, daytime: 10, evening: 5},
//     {day: 'Wednesday', morning: 4, daytime: 9, evening: 2},
//     {day: 'Thursday', morning: 6, daytime: 10, evening: 5},
//     {day: 'Friday', morning: 8, daytime: 12, evening: 7},
//     {day: 'Saturday', morning: 9, daytime: 14, evening: 6},
//     {day: 'Sunday', morning: 12, daytime: 16, evening: 11}
// ];
//
// #bAUsaq6LI
//

// let strVal: string | null = prompt('Write one of the available numbers (1, 0, -3)');
// if (strVal !== null){
//     let numVal: number = +strVal;
//     if (numVal !== 0){
//         console.log('Correct');
//     } else {
//         console.log('Incorrect');
//     }
// }
//
// #3ckURgvs
//

// let strTime: string | null = prompt('Enter the number from 0 to 59')
// if(strTime !== null){
//     let numTime = +strTime;
//     if (numTime <= 15) {
//         console.log('Your number is in the first quarter');
//     } else if (numTime > 15 && numTime <= 30) {
//         console.log('Your number is in the second quarter');
//     } else if (numTime > 30 && numTime <= 45) {
//         console.log('Your number is in the third quarter');
//     } else if (numTime > 45 && numTime <= 59) {
//         console.log('Your number is in the fourth quarter');
//     } else {
//         console.log('Your number is not in allowed range!');
//     }
// }
//
// #UMoNq4biWGe
//

// let dayStr: string | null = prompt('Enter the number from 1 to 31');
// if(dayStr !== null){
//     let dayNum: number = +dayStr;
//     if (dayNum <= 10) {
//         console.log('You are in the first decade');
//     } else if (dayNum > 10 && dayNum <= 20) {
//         console.log('You are in the second decade');
//     } else if (dayNum > 20 && dayNum <= 31) {
//         console.log('You are in the third decade');
//     } else {
//         console.log('Your number is out of the allowed range!');
//     }
// }
//
// #KzrtqyQ
//

// let dayStr: string | null = prompt('Enter the day of the week to see the schedule (1 - 7)');
// if(dayStr !== null){
//     let dayNum = +dayStr;
//     switch (dayNum){
//         case 1:
//             console.log('Gym');
//             console.log('Working time from 11 till 17');
//             console.log('Studying');
//             break;
//         case 2:
//             console.log('Swimming');
//             console.log('Working time from 11 till 17');
//             console.log('English lesson');
//             break;
//         case 3:
//             console.log('Gym');
//             console.log('Working time from 11 till 17');
//             console.log('Football match');
//             break;
//         case 4:
//             console.log('Diving');
//             console.log('Working time from 11 till 17');
//             console.log('English lesson');
//             break;
//         case 5:
//             console.log('Gym');
//             console.log('Working time from 11 till 17');
//             console.log('Go out with friends');
//             break;
//         case 6:
//         case 7:
//             console.log('Today is the day off, have a rest');
//             break;
//     }
// }
//
// #uwsz1RnTQJ1
//


// let aStr: string | null = prompt('Enter the first number');
// let bStr: string | null  = prompt('Enter the second number');
// if(aStr != null && bStr != null){
//     let aNum: number = +aStr;
//     let bNum: number = +bStr;
//     if (aNum > bNum){
//         console.log('The first number is bigger!');
//     } else if (aNum < bNum){
//         console.log('The second number is bigger!');
//     } else{
//         console.log('Your numbers are equal!');
//     }
// }
//
// #iBvqtjEm
//

// let x: string | number | undefined | boolean | null = null;
// if (!x) {
//     x = 'default';
// }
//
// #awLXL6TBzg
//
// type CoursesType = {
//   title: string;
//   monthDuration: number;
// };
//
// let coursesAndDurationArray: CoursesType[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0]['monthDuration'] > 5) {
//     console.log('Супер')
// }else {
//     console.log('Не підходить')
// }
// if (coursesAndDurationArray[1]['monthDuration'] > 5) {
//     console.log('Супер')
// }else {
//     console.log('Не підходить')
// }
// if (coursesAndDurationArray[2]['monthDuration'] > 5) {
//     console.log('Супер')
// }else {
//     console.log('Не підходить')
// }
// if (coursesAndDurationArray[3]['monthDuration'] > 5) {
//     console.log('Супер')
// }else {
//     console.log('Не підходить')
// }
// if (coursesAndDurationArray[4]['monthDuration'] > 5) {
//     console.log('Супер')
// }else {
//     console.log('Не підходить')
// }
// if (coursesAndDurationArray[5]['monthDuration'] > 5) {
//     console.log('Супер')
// }else {
//     console.log('Не підходить')
// }