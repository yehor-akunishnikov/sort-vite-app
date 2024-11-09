import './style.css';

import {useRenderPagination} from './hooks/use-render-pagination.ts';
import {useApplyFilters} from './hooks/use-apply-filters.ts';
import {useRenderList} from './hooks/use-render-list.ts';
import {useRender} from './hooks/use-render.ts';
import {AppState, defaultState} from './state';
import {setListeners} from './utils/events.ts';
import {Controls} from './models';

/* Receiving necessary DOM elements */
const root = document.querySelector<HTMLDivElement>('#root');
const paginationRoot = document.querySelector<HTMLDivElement>('#paginationRoot');
const controls: Controls = {
    sortByAgeBtn: document.querySelector<HTMLButtonElement>('#sortByAge'),
    sortByNameBtn: document.querySelector<HTMLButtonElement>('#sortByName'),
    colorButtons: document.querySelectorAll<HTMLButtonElement>('button[data-color]')
};

/* Cloning initial AppState */
const appState: AppState = JSON.parse(JSON.stringify(defaultState));

const renderList = useRenderList(root, appState);
const applyFilters = useApplyFilters(appState);
const renderPagination = useRenderPagination(paginationRoot, appState, renderList, applyFilters);
const render = useRender(applyFilters, renderList, renderPagination);

/* Render initial app view */
render();

/* Listen for control elements events */
setListeners(controls, appState, render);
