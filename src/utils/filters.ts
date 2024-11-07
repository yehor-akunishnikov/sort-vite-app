import {AppState, User} from '../models';

/* Apply filters from appState to the list of users */
export const applyFilters = (appState: AppState): User[] => {
    // Clone list in order to original list unchanged by sort operations,
    // and be able to filter a copy on a go
    let listDeepCopy: User[] = JSON.parse(JSON.stringify(appState.users));

    if (appState.activeFilters.sortBy) {
        switch (appState.activeFilters.sortBy) {
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

    if (appState.activeFilters.colorFilter) {
        listDeepCopy = listDeepCopy.filter(user => user.favoriteColor === appState.activeFilters.colorFilter);
    }

    return listDeepCopy;
};
