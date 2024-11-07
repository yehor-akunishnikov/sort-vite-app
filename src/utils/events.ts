import {AppState, Controls, FavoriteColor} from '../models';
import {render} from './render.ts';

/* Mark sort button as active 'light blue color' */
const toggleButtonState = (
    isAlreadyActive: boolean,
    button: HTMLButtonElement,
    oppositeButton: HTMLButtonElement
): void => {
    if (isAlreadyActive) {
        button.classList.remove('active');
    } else {
        button.classList.add('active');
        oppositeButton.classList.remove('active');
    }
};

/* Set listeners for control elements */
export const setListeners = (
    root: HTMLDivElement,
    controls: Controls,
    appState: AppState
): void => {
    controls.sortByAgeBtn.addEventListener('click', () => {
        appState.activeFilters.sortBy = appState.activeFilters.sortBy === 'age' ? null : 'age';

        toggleButtonState(
            appState.activeFilters.sortBy === 'age',
            controls.sortByAgeBtn,
            controls.sortByNameBtn
        );

        render(root, appState);
    });

    controls.sortByNameBtn.addEventListener('click', () => {
        appState.activeFilters.sortBy = appState.activeFilters.sortBy === 'name' ? null : 'name';

        toggleButtonState(
            appState.activeFilters.sortBy === 'name',
            controls.sortByNameBtn,
            controls.sortByAgeBtn
        );

        render(root, appState);
    });

    controls.colorButtons.forEach(btn => btn.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        const color = target.getAttribute('data-color') as FavoriteColor;

        appState.activeFilters.colorFilter = color === appState.activeFilters.colorFilter ? null : color;

        render(root, appState);
    }));
};
