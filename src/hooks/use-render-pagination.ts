import {AppState} from '../state';

export const useRenderPagination = (
    paginationRoot: HTMLDivElement,
    appState: AppState,
    renderList: () => void,
    applyFilter: () => void
): () => void => {
    return (): void => {
        const buttons = new Array(appState.processingState.pagination.pagesTotal).fill(0)
            .map((_, index) => {
                const btn = document.createElement('button');

                btn.innerText = String(index + 1);
                btn.classList.add('pagination-btn');

                if (index === 0) {
                    btn.classList.add('active');
                }

                btn.addEventListener('click', () => {
                    appState.processingState.pagination.currentPage = index;

                    paginationRoot.querySelectorAll('.pagination-btn').forEach(btn => btn.classList.remove('active'));
                    btn.classList.add('active');

                    applyFilter();
                    renderList();
                });

                return btn;
            });

        paginationRoot.innerHTML = '';
        paginationRoot.append(...buttons);
    };
};
