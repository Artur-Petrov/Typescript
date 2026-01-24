//     #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

// let div: HTMLDivElement = document.getElementsByTagName('div')[0];
// let button:HTMLButtonElement = document.getElementsByTagName('button')[0];
// button.onclick = function (): void {
//     div.style.display = 'none';
// }

// ------------------------------------------------------------------------------------------------------------

// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

// let age = document.getElementById('age') as HTMLInputElement;
// let check = document.getElementById('check') as HTMLButtonElement;
//
// check.onclick = function (): void {
//     let userAge: number = +age.value;
//     let msg: HTMLParagraphElement = document.createElement('p');
//
//     if (!userAge) {
//         msg.innerText = 'Please enter correct age';
//     } else if (userAge >= 18) {
//         msg.innerText = 'You are welcome!';
//     } else {
//         msg.innerText = 'Your are not allowed!';
//     }
//     document.body.appendChild(msg);
// }

// ------------------------------------------------------------------------------------------------------------

// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

// let form = document.forms.namedItem('user_form') as HTMLFormElement;
//
// let submitBtn: HTMLButtonElement = document.getElementsByTagName('button')[0];
// submitBtn.onclick = function (event): void {
//     event.preventDefault();
//     let user_name: string = form.user_name.value;
//     let user_surname: string = form.user_username.value;
//     let user_age: number = form.user_age.value;
//
//     let userInfo = {user_name, user_surname, user_age};
//
//     let container: HTMLDivElement = document.createElement('div');
//     container.classList.add('container');
//     container.innerText = `${user_name} ${user_surname} ${user_age}`;
//     document.body.appendChild(container);
// }
// ------------------------------------------------------------------------------------------------------------

// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// const storedValue: string | null = localStorage.getItem('number');
//
// let count: number = storedValue ? Number(storedValue) : 0;
// count += 1;
//
// localStorage.setItem('number', count.toString());
//
// const divElement: HTMLElement | null = document.getElementById('div');
//
// if (divElement) {
//     divElement.innerText = count.toString();
// }

// ------------------------------------------------------------------------------------------------------------

// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

// const json: string | null = localStorage.getItem('sessionList');
//
// let sessionsList: string[] = json ? JSON.parse(json) : [];
//
// sessionsList.push(new Date().toISOString());
//
// localStorage.setItem('sessionList', JSON.stringify(sessionsList));

// Перевірка

// ------------------------------------------------------------------------------------------------------------

// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

// const kg_input = document.getElementById('kg') as HTMLInputElement;
// const lbs_result = document.getElementById('lbs') as HTMLOutputElement;
//
// kg_input.oninput = function (): void {
//     let kg: number = +kg_input.value;
//     lbs_result.innerText = `${kg * 2.20462}`;
// }

// ------------------------------------------------------------------------------------------------------------

// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

// function addToLocalStorage(arrayName: string,objToAdd: any ): void {
//     const json: string | null = localStorage.getItem(arrayName);
//     let arr: any[] = json ? JSON.parse(json) : [];
//
//     arr.push(objToAdd);
//
//     localStorage.setItem(arrayName, JSON.stringify(arr));
// }
// addToLocalStorage('sessionList', {});

// ------------------------------------------------------------------------------------------------------------

// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

// let table: HTMLTableElement = document.getElementsByTagName('table')[0];
//
// let tableFactory = document.forms.namedItem('tableForm') as HTMLFormElement;
//
// tableFactory.onsubmit = function (event) {
//     event.preventDefault();
//     table.innerText = '';
//     let rows: number = +tableFactory.rows.value;
//     let columns: number = +tableFactory.columns.value;
//     let data: string = tableFactory.data.value;
//
//     for (let i = 0; i < rows ; i++) {
//         let tr: HTMLTableRowElement = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             let td: HTMLTableCellElement = document.createElement('td');
//             td.innerText = data;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// }

// ------------------------------------------------------------------------------------------------------------

// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


// let storedPrice: string | null = localStorage.getItem('price');
// let price: number = storedPrice ? Number(storedPrice) : 100;
//
// let storedTime: string | null = localStorage.getItem('lastPriceUpdate');
// let lastPriceUpdate: number = storedTime ? Number(storedTime) : 0;
//
// let currentTime: number = Date.now();
//
// if (currentTime - lastPriceUpdate >= 10000) {
//     price += 10;
//
//     localStorage.setItem('price', price.toString());
//     localStorage.setItem('lastPriceUpdate', currentTime.toString());
// }
//
// const targetElement = document.getElementById('target');
//
// if (targetElement) {
//     targetElement.innerText = price + ' grn';
// }

// ------------------------------------------------------------------------------------------------------------

// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

// const per_page: number = 10;
// let currentPage: number = 1;
// const allItems: number = 100;
//
// let container: HTMLDivElement = document.getElementsByTagName('div')[0];
// let prevBtn: HTMLButtonElement = document.getElementsByTagName('button')[0];
// let nextBtn: HTMLButtonElement = document.getElementsByTagName('button')[1];
//
// const dataArray: any[] = [];
// for (let i = 1; i <=allItems ; i++) {
//     dataArray.push(`Some obj with  #${i}`);
// }
//
// const allPages: number = dataArray.length/per_page;
//
// function prevNextStatus(): void {
//     prevBtn.disabled = currentPage === 1;
//     nextBtn.disabled = currentPage === allPages;
// }
//
// function renderPage(): void {
//     const startIndex: number = (currentPage - 1) * per_page;
//     const endIndex: number = startIndex + per_page;
//
//     const shownItems: string[] = dataArray.slice(startIndex, endIndex);
//
//     container.innerHTML = '';
//
//     for (const item of shownItems) {
//         const itemDiv: HTMLDivElement = document.createElement('div');
//         itemDiv.innerText = `${item}`;
//         container.appendChild(itemDiv);
//     }
//
//     prevNextStatus();
// }
//
// nextBtn.addEventListener('click', (): void => {
//     if (currentPage < allPages) {
//         currentPage++;
//         renderPage();
//     }
// });
//
// prevBtn.addEventListener('click', (): void => {
//     if (currentPage > 1) {
//         currentPage--;
//         renderPage();
//     }
// });
//
// renderPage();