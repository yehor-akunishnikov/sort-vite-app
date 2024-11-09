import {Controls, FavoriteColor} from '../models';
import {AppState} from '../state';

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
    controls: Controls,
    appState: AppState,
    render: () => void
): void => {
    controls.search.addEventListener('input', () => {
        appState.processingState.search = controls.search.value;
        appState.processingState.pagination.currentPage = 0;

        render();
    });

    controls.sortByAgeBtn.addEventListener('click', () => {
        toggleButtonState(
            appState.processingState.sort === 'age',
            controls.sortByAgeBtn,
            controls.sortByNameBtn
        );

        appState.processingState.sort = appState.processingState.sort === 'age' ? null : 'age';
        appState.processingState.pagination.currentPage = 0;

        render();
    });

    controls.sortByNameBtn.addEventListener('click', () => {
        toggleButtonState(
            appState.processingState.sort === 'name',
            controls.sortByNameBtn,
            controls.sortByAgeBtn
        );

        appState.processingState.sort = appState.processingState.sort === 'name' ? null : 'name';
        appState.processingState.pagination.currentPage = 0;

        render();
    });

    controls.colorButtons.forEach(btn => btn.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        const color = target.getAttribute('data-color') as FavoriteColor;

        appState.processingState.filter = color === appState.processingState.filter ? null : color;
        appState.processingState.pagination.currentPage = 0;

        controls.colorButtons.forEach(colorBtn => {
            if (colorBtn !== btn) {
                colorBtn.classList.remove('active');
            }
        });
        btn.classList.toggle('active');

        render();
    }));
};
