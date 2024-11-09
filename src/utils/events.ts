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
    controls.sortByAgeBtn.addEventListener('click', () => {
        toggleButtonState(
            appState.processingState.sort.type === 'age',
            controls.sortByAgeBtn,
            controls.sortByNameBtn
        );

        appState.processingState.sort.type = appState.processingState.sort.type === 'age' ? null : 'age';

        render();
    });

    controls.sortByNameBtn.addEventListener('click', () => {
        toggleButtonState(
            appState.processingState.sort.type === 'name',
            controls.sortByNameBtn,
            controls.sortByAgeBtn
        );

        appState.processingState.sort.type = appState.processingState.sort.type === 'name' ? null : 'name';

        render();
    });

    controls.colorButtons.forEach(btn => btn.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        const color = target.getAttribute('data-color') as FavoriteColor;

        appState.processingState.filter = color === appState.processingState.filter ? null : color;

        render();
    }));
};
