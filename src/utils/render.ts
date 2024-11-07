import {applyFilters} from './filters.ts';
import {AppState} from '../models';

const createListItem = (text: string): HTMLLIElement => {
    const li = document.createElement('li');

    li.innerText = text;

    return li;
};

export const render = (
    root: HTMLDivElement,
    appState: AppState
): void => {
    const ul = document.createElement('ul');

    root.innerHTML = '';

    ul.append(...applyFilters(appState).map((user) => {
        return createListItem(Object.entries(user).map(entry => entry.join(': ')).join(', '));
    }));

    root.append(ul);
};
