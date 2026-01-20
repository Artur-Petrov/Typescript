// #iz6emEsP2BA
//
// – є масив
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
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції

// class Course1{
//     title: string;
//     monthDuration: number;
//
//     constructor(title: string, monthDuration: number) {
//         this.title = title;
//         this.monthDuration = monthDuration;
//     }
// }
//
// class Course2 extends Course1{
//     id: number;
//
//     constructor(title: string, monthDuration: number, id: number) {
//         super(title, monthDuration);
//         this.id = id;
//     }
// }
//
// let coursesAndDurationArray: Course1[] = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let map = coursesAndDurationArray.map<Course2>((value: Course1, index: number) => ({...value, id: index+1}));
// console.log(map);

// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.
//

function cloner<T>(obj: T): T {
    if (obj) {
        let functions: Array<{functionClone: Function, key: string}> = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = (obj[key] as Function).bind({});
                functions.push({functionClone, key});
            }
        }
        const cloneObj: T = JSON.parse(JSON.stringify(obj));
        for (const func of functions) {
           (cloneObj as any)[func.key] = func.functionClone;
        }

        return cloneObj

    }

    throw new Error('Error');

}

const clone = cloner({id: 1, name: 'kokos', greeting1() {console.log('hello')}, greeting2() {console.log('hi')}});