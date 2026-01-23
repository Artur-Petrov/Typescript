interface IUser {
    id: number;
    name: string;
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users: IUser[]) => {

    });
async function foobar(): Promise<IUser[]> {
    let users: IUser[] = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((value: Response) => value.json())

    return users;
}