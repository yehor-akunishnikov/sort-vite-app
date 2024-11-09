import {AppState} from '../state';
import {User} from '../models';

export const useApplyFilters = (appState: AppState): () => void => {
    return (): void => {
        let listDeepCopy: User[] = JSON.parse(JSON.stringify(appState.users));

        if (appState.processingState.sort.type) {
            switch (appState.processingState.sort.type) {
                case 'age': {
                    listDeepCopy.sort((a, b) => a.age - b.age);
                    break;
                }
                case 'name': {
                    listDeepCopy.sort((a, b) => a.name > b.name ? 1 : -1);
                    break;
                }
            }
        }

        if (appState.processingState.filter) {
            listDeepCopy = listDeepCopy.filter(user => user.favoriteColor === appState.processingState.filter);
        }

        appState.processingState.pagination.pagesTotal = Math.ceil(
            listDeepCopy.length / appState.processingState.pagination.itemsPerPage
        );

        appState.currentUsers = listDeepCopy.slice(
            appState.processingState.pagination.currentPage * appState.processingState.pagination.itemsPerPage,
            (appState.processingState.pagination.currentPage + 1) * appState.processingState.pagination.itemsPerPage
        );
    };
};