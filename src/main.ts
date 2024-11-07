import './style.css';

import {setListeners} from './utils/events.ts';
import {render} from './utils/render.ts';
import {state} from './constants';

const root = document.querySelector<HTMLDivElement>('#root');

const sortByAgeBtn = document.querySelector<HTMLButtonElement>('#sortByAge');
const sortByNameBtn = document.querySelector<HTMLButtonElement>('#sortByName');

const colorButtons = document.querySelectorAll<HTMLButtonElement>('button[data-color]');

const appState = JSON.parse(JSON.stringify(state));

render(root, appState);
setListeners(
    root,
    {sortByAgeBtn, sortByNameBtn, colorButtons},
    appState
);
