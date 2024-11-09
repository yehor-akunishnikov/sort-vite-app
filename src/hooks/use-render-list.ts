import {AppState} from '../state';

const createListItem = (text: string): HTMLLIElement => {
    const li = document.createElement('li');

    li.innerText = text;

    return li;
};

export const useRenderList = (root: HTMLDivElement, appState: AppState): () => void => {
    return (): void => {
        const ul = document.createElement('ul');

        root.innerHTML = '';
        ul.append(...appState.currentUsers.map((user) => {
            return createListItem(Object.entries(user).map(entry => entry.join(': ')).join(', '));
        }));

        root.append(ul);
    };
};
