export type FavoriteColor = 'red' | 'blue' | 'orange' | 'green';
export type SortType = 'age' | 'name';

export interface User {
    name: string;
    age: number;
    favoriteColor: FavoriteColor;
}

export interface PaginationState {
    pagesTotal?: number;
    currentPage: number;
    itemsPerPage: number;
}

export interface ProcessingState {
    sort: SortType;
    filter: FavoriteColor;
    pagination: PaginationState;
    search: string;
}

export interface Controls {
    search: HTMLInputElement;
    sortByAgeBtn: HTMLButtonElement;
    sortByNameBtn: HTMLButtonElement;
    colorButtons: NodeListOf<HTMLButtonElement>;
}
