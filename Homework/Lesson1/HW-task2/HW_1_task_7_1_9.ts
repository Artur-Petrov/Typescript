// #XjJuucOMR0
//
// – Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
// class User{
//
//     constructor(private id: number,private name: string,private surname: string,private email: string,private phone: string){
//     }
// }
//
// let users: User[] = [
//     new User(1, 'vasya', 'vasyenko', 'vasya.com', '+38067676767'),
//     new User(2, 'petya', 'petyenko', 'petya.com', '+24234242424'),
//     new User(3, 'kolya', 'kolyenko', 'kolya.com', '+43434343434'),
//     new User(4, 'olya', 'olyenko', 'olya.com', '+6556565656565'),
//     new User(5, 'max', 'maxenko', 'max.com', '+1112212111212'),
//     new User(6, 'anya', 'anyemko', 'anya.com', '+8989898989898'),
//     new User(7, 'oleg', 'olegenko', 'oleg.com', '+1233443546644'),
//     new User(8, 'andrey', 'andryenko', 'andrey.com', '+707070707070'),
//     new User(9, 'masha', 'mashenko', 'masha.com', '+239846749823498'),
//     new User(10, 'igor', 'igorenko', 'igor.com', '+097807087960796'),
// ];
// console.log(users);

// #2ikXsE2WiKZ
//
// – Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

// class User{
//     id: number;
//     name: string;
//     surname: string;
//     email: string;
//     phone: string
//
//     constructor(id: number,name: string,surname: string,email: string,phone: string){
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//
// let users: User[] = [
//     new User(1, 'vasya', 'vasyenko', 'vasya.com', '+38067676767'),
//     new User(2, 'petya', 'petyenko', 'petya.com', '+24234242424'),
//     new User(3, 'kolya', 'kolyenko', 'kolya.com', '+43434343434'),
//     new User(4, 'olya', 'olyenko', 'olya.com', '+6556565656565'),
//     new User(5, 'max', 'maxenko', 'max.com', '+1112212111212'),
//     new User(6, 'anya', 'anyemko', 'anya.com', '+8989898989898'),
//     new User(7, 'oleg', 'olegenko', 'oleg.com', '+1233443546644'),
//     new User(8, 'andrey', 'andryenko', 'andrey.com', '+707070707070'),
//     new User(9, 'masha', 'mashenko', 'masha.com', '+239846749823498'),
//     new User(10, 'igor', 'igorenko', 'igor.com', '+097807087960796'),
// ];
//
// const filteredUsers =users.filter(value => value.id % 2 === 0);
// console.log(filteredUsers);

// #pOeHKct
//
// – Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let users: User[] = [
//     new User(1, 'vasya', 'vasyenko', 'vasya.com', '+38067676767'),
//     new User(2, 'petya', 'petyenko', 'petya.com', '+24234242424'),
//     new User(3, 'kolya', 'kolyenko', 'kolya.com', '+43434343434'),
//     new User(4, 'olya', 'olyenko', 'olya.com', '+6556565656565'),
//     new User(5, 'max', 'maxenko', 'max.com', '+1112212111212'),
//     new User(6, 'anya', 'anyemko', 'anya.com', '+8989898989898'),
//     new User(7, 'oleg', 'olegenko', 'oleg.com', '+1233443546644'),
//     new User(8, 'andrey', 'andryenko', 'andrey.com', '+707070707070'),
//     new User(9, 'masha', 'mashenko', 'masha.com', '+239846749823498'),
//     new User(10, 'igor', 'igorenko', 'igor.com', '+097807087960796'),
// ];

// let usersSortedId = users.sort((a, b) => a.id - b.id);
// console.log(usersSortedId);
//
// #nkMXISv
//
// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
// class Client {
//     id: number;
//     name: string;
//     surname: string;
//     email: string;
//     phone: string;
//     order: string[]
//     constructor (id: number, name: string, surname: string, email: string, phone: string, order: string[]) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
//
//     let clientBase: Client[] = [
//         new Client(1, 'vasya', 'vasyenko', 'vasya.com', '+38067676767', ['kokos', 'ogirok', 'potato']),
//         new Client(2, 'petya', 'petyenko', 'petya.com', '+24234242424', ['morkva', 'jablyko', 'cherry']),
//         new Client(3, 'kolya', 'kolyenko', 'kolya.com', '+43434343434', ['kiwi', 'ogirok']),
//         new Client(4, 'olya', 'olyenko', 'olya.com', '+6556565656565', ['maslo']),
//         new Client(5, 'max', 'maxenko', 'max.com', '+1112212111212', ['moloko', 'cheese', 'kiwi', 'peach']),
//         new Client(6, 'anya', 'anyemko', 'anya.com', '+8989898989898', ['kovbasa', 'ogirok']),
//         new Client(7, 'oleg', 'olegenko', 'oleg.com', '+1233443546644', ['kokos']),
//         new Client(8, 'andrey', 'andryenko', 'andrey.com', '+707070707070', ['palyanytsa', 'kiwi', 'kokos', 'papaya', 'mango']),
//         new Client(9, 'masha', 'mashenko', 'masha.com', '+239846749823498', ['onion', 'tomat', 'bylochka']),
//         new Client(10, 'igor', 'igorenko', 'igor.com', '+097807087960796', ['juice', 'morkva'])
//     ];
// console.log(clientBase);

// #8abtVjRv
//
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

// class Client {
//     id: number;
//     name: string;
//     surname: string;
//     email: string;
//     phone: string;
//     order: string[]
//     constructor (id: number, name: string, surname: string, email: string, phone: string, order: string[]) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//     let clientBase: Client[] = [
//         new Client(1, 'vasya', 'vasyenko', 'vasya.com', '+38067676767', ['kokos', 'ogirok', 'potato']),
//         new Client(2, 'petya', 'petyenko', 'petya.com', '+24234242424', ['morkva', 'jablyko', 'cherry']),
//         new Client(3, 'kolya', 'kolyenko', 'kolya.com', '+43434343434', ['kiwi', 'ogirok']),
//         new Client(4, 'olya', 'olyenko', 'olya.com', '+6556565656565', ['maslo']),
//         new Client(5, 'max', 'maxenko', 'max.com', '+1112212111212', ['moloko', 'cheese', 'kiwi', 'peach']),
//         new Client(6, 'anya', 'anyemko', 'anya.com', '+8989898989898', ['kovbasa', 'ogirok']),
//         new Client(7, 'oleg', 'olegenko', 'oleg.com', '+1233443546644', ['kokos']),
//         new Client(8, 'andrey', 'andryenko', 'andrey.com', '+707070707070', ['palyanytsa', 'kiwi', 'kokos', 'papaya', 'mango']),
//         new Client(9, 'masha', 'mashenko', 'masha.com', '+239846749823498', ['onion', 'tomat', 'bylochka']),
//         new Client(10, 'igor', 'igorenko', 'igor.com', '+097807087960796', ['juice', 'morkva'])
//     ];
//
// let sortedOrders = clientBase.sort((order1, order2) => order1.order.length - order2.order.length);
// console.log(sortedOrders);

// #vV9a6584I5
//
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

// function Car(model, producer, productionYear, maxSpeed, engineVolume){
//     this.model = model;
//     this.producer = producer;
//     this.productionYear = productionYear;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`Driving with the ${this.maxSpeed} per hour`);
//     };
//     this.info = function () {
//         for (const i in this) {
//             console.log(i, this[i]);
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed += newSpeed;
//     };
//     this.changeYear = function (newYear){
//         this.productionYear =  newYear;
//     };
//     this.addDriver = function (driver){
//         this.driver = driver;
//     };
// }


// let car = new Car('smart','Mercedes Benz', 2008, 280, 5);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(300);
// car.changeYear(2025);
// car.addDriver({});
// console.log(car);

// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car
// type Driver = {
//     name: string;
// }
//
// class Car{
//
//     model: string;
//     producer: string;
//     productionYear: number;
//     maxSpeed: number;
//     engineVolume: number
//     driver?: Driver;
//
//     constructor(model: string, producer: string, productionYear: number, maxSpeed: number, engineVolume: number) {
//         this.model = model;
//         this.producer = producer;
//         this.productionYear = productionYear;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     }
//
//
//     drive(): void {
//         console.log(`Driving with the ${this.maxSpeed} per hour`);
//     };
//     info(): void {
//         for (const i in this) {
//             console.log(i, this[i]);
//         }
//     };
//     increaseMaxSpeed(newSpeed: number): void{
//         this.maxSpeed += newSpeed;
//     };
//     changeYear(newYear: number){
//         this.productionYear =  newYear;
//     };
//     addDriver(driver: Driver){
//         this.driver = driver;
//     };
// }
// let car = new Car('smart','Mercedes Benz', 2008, 280, 5);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(300);
// car.changeYear(2025);
// car.addDriver({name: 'qwere'});
// console.log(car);

// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

// class Popelyshka{
//     name: string;
//     age: number;
//     footSize: number;
//
//     constructor(name: string, age: number, footSize: number) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// };
//
// class Prince{
//     name: string;
//     age: number;
//     tyfelka: number;
//     wife?: Popelyshka;
//
//     constructor(name: string, age: number, tyfelka: number) {
//         this.name = name;
//         this.age = age;
//         this.tyfelka = tyfelka;
//     }
// }
//
// let popelyshkas: Popelyshka[] = [
//     new Popelyshka('Diana', 18, 32),
//     new Popelyshka('Alina', 19, 33),
//     new Popelyshka('Olya', 21, 33),
//     new Popelyshka('Tonya', 18, 34),
//     new Popelyshka('Tania', 32, 35),
//     new Popelyshka('Ira', 34, 36),
//     new Popelyshka('Anna', 22, 37),
//     new Popelyshka('Nastya', 23, 38),
//     new Popelyshka('Polina', 18, 34),
//     new Popelyshka('Victoria', 25, 32),
// ];
// let prince: Prince = new Prince('Daniel', 23, 38);

// for (const popelyshka of popelyshkas) {
//     if(popelyshka.footSize === prince.tyfelka) {
//         console.log('Prince found the right popelyshka');
//     }
// }
// let find = popelyshkas.find(popelyshka => popelyshka.footSize === prince.tyfelka);
// console.log(find);

// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

interface Array<T>{
    myFilter(callback: (value: T) => boolean): T[];
}


Array.prototype.myFilter = function <T> (condition: (value: T) => boolean): T[] {
    let arr = [];
    for (const arrElement of this) {
        if (condition(arrElement)) {
            arr.push(arrElement);
        }
    }
    return arr;
}