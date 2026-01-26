class UserGen<T1> {
    id: T1;
    name:string;


    constructor(id: T1, name: string) {
        this.id = id;
        this.name = name;
    }
}

let userGen1 = new UserGen<number>(1, 'dsdsw');
let userGen2 = new UserGen<string>('dsdsdsdsd', 'qweqwe');
let userGen3 = new UserGen<{x: number}>({x: 10101}, 'qweqwe');

let arr:Array<number> = [1, 2, 3, 4, 5, 6, 7];



interface IUserLocalStorage {
    id: number;
    name: string;
}

// local storage

let item = localStorage.getItem('qwe');
if (item){
    let user: IUserLocalStorage = JSON.parse(item) as IUserLocalStorage;
}

interface IDog{
    aka: string;
}

function foobarG<T>(key: string): T {
    let objJSON = localStorage.getItem(key);
    if (objJSON){
        return JSON.parse(objJSON) as T;
    }
    return {} as T;
}
let iDog = foobarG<IDog>('dog');
let iUserLocalStorage = foobarG<IUserLocalStorage>('qwer');

