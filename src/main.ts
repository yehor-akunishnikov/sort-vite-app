import './style.css';

import {setListeners} from './utils/events.ts';
import {render} from './utils/render.ts';
import {Controls} from './models';
import {state} from './constants';

/* Receiving necessary DOM elements */
const root = document.querySelector<HTMLDivElement>('#root');
const controls: Controls = {
    sortByAgeBtn: document.querySelector<HTMLButtonElement>('#sortByAge'),
    sortByNameBtn: document.querySelector<HTMLButtonElement>('#sortByName'),
    colorButtons: document.querySelectorAll<HTMLButtonElement>('button[data-color]')
};

/* Cloning initial AppState */
const appState = JSON.parse(JSON.stringify(state));

/* Render from default state */
render(root, appState);

/* Listen for control elements events */
setListeners(
    root,
    controls,
    appState
);
