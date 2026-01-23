// #8Nmt60ZT
//
// – створити блок,
//
// – додати йому класи wrap, collapse, alpha, beta
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
//
// – додати цей блок в body.
//
// – клонувати його повністю, та додати клон в body.

// let createDiv: HTMLDivElement = document.createElement('div');
// createDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// document.body.appendChild(createDiv);
//
// let cloneNode: Node = createDiv.cloneNode(true);
// document.body.appendChild(cloneNode);

// #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

// let arr: string[] = ['Main', 'Products', 'About us', 'Contacts'];
//
// let ulElement: HTMLUListElement = document.createElement('ul');
//
// for (const i of arr) {
//     let liElement: HTMLLIElement = document.createElement('li');
//     liElement.innerText = i;
//     ulElement.appendChild(liElement);
// }
// document.body.appendChild(ulElement);

// #jeBqHV525U5
//
// – Є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.

// type CourseType = {
//     title: string;
//     monthDuration: number;
// }
//
// let coursesAndDurationArray: CourseType[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const item of coursesAndDurationArray) {
//     let div: HTMLDivElement = document.createElement('div');
//     div.innerText = item.title + ' ' + item.monthDuration;
//     document.body.appendChild(div);
// }

// #Kx1xgoKy8
//
// – Є масив
//
// let coursesAndDurationArray = [
//
//     {title: ‘JavaScript Complex’, monthDuration: 5},
//
// {title: ‘Java Complex’, monthDuration: 6},
//
// {title: ‘Python Complex’, monthDuration: 6},
//
// {title: ‘QA Complex’, monthDuration: 4},
//
// {title: ‘FullStack’, monthDuration: 7},
//
// {title: ‘Frontend’, monthDuration: 4}
//
// ];
//
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
//
//     Завдання робити через цикли.

// type CourseType = {
//     title: string;
//     monthDuration: number;
// }
//
// let coursesAndDurationArray: CourseType[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const course of coursesAndDurationArray) {
//     let div: HTMLDivElement = document.createElement('div');
//     div.classList.add('item');
//
//     let h2: HTMLHeadingElement = document.createElement('h2');
//     h2.classList.add('heading');
//     h2.innerText = course.title;
//
//     let p: HTMLParagraphElement = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = `${course.monthDuration}`;
//
//     div.append(h2, p);
//
//     document.body.appendChild(div);
// }
//
// =========
//
// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

// type CourseType = {
//     title: string;
//     monthDuration: number;
//     hourDuration: number;
//     modules: string[];
// }
//
// let coursesArray: CourseType[] = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// for (const course of coursesArray) {
//     let wrapperDiv: HTMLDivElement = document.createElement('div');
//     wrapperDiv.classList.add('wrapper');
//
//     let divForTitle: HTMLDivElement = document.createElement('div');
//     divForTitle.classList.add('title');
//     divForTitle.innerText = course.title;
//
//     let divForAllDuration: HTMLDivElement = document.createElement('div');
//     divForAllDuration.classList.add('duration');
//
//     let divForMonthDuration: HTMLDivElement = document.createElement('div');
//     divForMonthDuration.classList.add('month-duration');
//     divForMonthDuration.innerText = `${course.monthDuration}`;
//
//     let divForHourDuration: HTMLDivElement = document.createElement('div');
//     divForHourDuration.classList.add('hour-duration');
//     divForHourDuration.innerText = `${course.hourDuration}`;
//
//     divForAllDuration.append(divForMonthDuration, divForHourDuration);
//
//     let divForModules: HTMLDivElement = document.createElement('div');
//     divForModules.classList.add('modules');
//
//     let ulForModules: HTMLUListElement = document.createElement('ul');
//     for (const module of course.modules) {
//         let liForModules: HTMLLIElement = document.createElement('li');
//         liForModules.innerText = module;
//         ulForModules.append(liForModules);
//     }
//     divForModules.append(ulForModules);
//
//     wrapperDiv.append(divForTitle, divForAllDuration, divForModules);
//
//     document.body.appendChild(wrapperDiv);
// }