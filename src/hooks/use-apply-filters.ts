import {FavoriteColor, SortType, User} from '../models';
import {AppState} from '../state';

const sortUsers = (usersList: User[], sortType: SortType): void => {
    switch (sortType) {
        case 'age': {
            usersList.sort((a, b) => a.age - b.age);
            break;
        }
        case 'name': {
            usersList.sort((a, b) => a.name > b.name ? 1 : -1);
            break;
        }
    }
};

const searchUsers = (usersList: User[], searchTerm: string): User[] => {
    return usersList.filter(user => user.name.toLowerCase().startsWith(searchTerm));
}

const filterUsers = (usersList: User[], filter: FavoriteColor): User[] => {
    return usersList.filter(user => user.favoriteColor === filter);
};

const countPagesTotal = (usersList: User[], itemsPerPage: number): number => {
    return Math.ceil(usersList.length / itemsPerPage);
};

const sliceUsers = (usersList: User[], currentPage: number, itemsPerPage: number): User[] => {
    const from = currentPage * itemsPerPage;
    const to = (currentPage + 1) * itemsPerPage;

    return usersList.slice(from, to);
};

export const useApplyFilters = (appState: AppState): () => void => {
    return (): void => {
        let listDeepCopy: User[] = JSON.parse(JSON.stringify(appState.users));

        if (appState.processingState.sort) {
            sortUsers(listDeepCopy, appState.processingState.sort);
        }

        if (appState.processingState.search) {
            listDeepCopy = searchUsers(listDeepCopy, appState.processingState.search);
        }

        if (appState.processingState.filter) {
            listDeepCopy = filterUsers(listDeepCopy, appState.processingState.filter);
        }

        appState.processingState.pagination.pagesTotal = countPagesTotal(
            listDeepCopy,
            appState.processingState.pagination.itemsPerPage
        );

        appState.currentUsers = sliceUsers(
            listDeepCopy,
            appState.processingState.pagination.currentPage,
            appState.processingState.pagination.itemsPerPage
        );
    };
};
