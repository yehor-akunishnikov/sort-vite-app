import './style.css';

interface User {
    name: string;
    age: number;
    favoriteColor: 'Red' | 'Blue' | 'Orange' | 'Green';
}

const root = document.querySelector<HTMLDivElement>('#root');

const sortByAgeBtn = document.querySelector<HTMLButtonElement>('#sortByAge');
const sortByNameBtn = document.querySelector<HTMLButtonElement>('#sortByName');

const colorButtons = document.querySelectorAll<HTMLButtonElement>('button[data-color]');

const users: User[] = [
    {name: 'Oleg', age: 22, favoriteColor: 'Red'},
    {name: 'Sam', age: 30, favoriteColor: 'Blue'},
    {name: 'Viktor', age: 18, favoriteColor: 'Orange'},
    {name: 'Olena', age: 20, favoriteColor: 'Red'},
    {name: 'Natali', age: 19, favoriteColor: 'Orange'},
    {name: 'Joka1337', age: 16, favoriteColor: 'Blue'},
    {name: 'Kate', age: 12, favoriteColor: 'Green'},
];

const createListItem = (text): HTMLLIElement => {
    const li = document.createElement('li');

    li.innerText = text;

    return li;
};

const setListeners = () => {
    sortByAgeBtn.addEventListener('click', console.log);
    sortByNameBtn.addEventListener('click', console.log);

    colorButtons.forEach(btn => btn.addEventListener('click', console.log));
};

const render = (): void => {
    const ul = document.createElement('ul');

    ul.append(...users.map((user) => {
        return createListItem(Object.entries(user).map(entry => entry.join(': ')).join(', '));
    }));

    setListeners();

    root.append(ul);
};

render();
