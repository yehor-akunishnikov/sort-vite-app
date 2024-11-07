import {AppState, User} from '../models';

export const applyFilters = (appState: AppState): User[] => {
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
