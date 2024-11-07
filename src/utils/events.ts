import {AppState, Controls, FavoriteColor} from '../models';
import {render} from './render.ts';

export const setListeners = (
    root: HTMLDivElement,
    controls: Controls,
    appState: AppState
) => {
    controls.sortByAgeBtn.addEventListener('click', () => {
        if (appState.activeFilters.sortBy === 'age') {
            appState.activeFilters.sortBy = null;
            controls.sortByAgeBtn.classList.remove('active');
        } else {
            appState.activeFilters.sortBy = 'age';
            controls.sortByAgeBtn.classList.add('active');
            controls.sortByNameBtn.classList.remove('active');
        }

        render(root, appState);
    });
    controls.sortByNameBtn.addEventListener('click', () => {
        if (appState.activeFilters.sortBy === 'name') {
            appState.activeFilters.sortBy = null;
            controls.sortByNameBtn.classList.remove('active');
        } else {
            appState.activeFilters.sortBy = 'name';
            controls.sortByNameBtn.classList.add('active');
            controls.sortByAgeBtn.classList.remove('active');
        }

        render(root, appState);
    });

    controls.colorButtons.forEach(btn => btn.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        const color = target.getAttribute('data-color') as FavoriteColor;

        appState.activeFilters.colorFilter = color === appState.activeFilters.colorFilter ? null : color;

        render(root, appState);
    }));
};
