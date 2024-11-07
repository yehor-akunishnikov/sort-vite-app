import {applyFilters} from './filters.ts';
import {AppState, User} from '../models';

/* Create "li" element */
const createListItem = (text: string): HTMLLIElement => {
    const li = document.createElement('li');

    li.innerText = text;

    return li;
};

/* Render from current app state */
export const render = (root: HTMLDivElement, appState: AppState): void => {
    const usersListWithAppliedFilters: User[] = applyFilters(appState);
    const ul = document.createElement('ul');

    root.innerHTML = '';

    ul.append(...usersListWithAppliedFilters.map((user) => {
        return createListItem(Object.entries(user).map(entry => entry.join(': ')).join(', '));
    }));

    root.append(ul);
};
