export type FavoriteColor = 'red' | 'blue' | 'orange' | 'green';

export interface User {
    name: string;
    age: number;
    favoriteColor: FavoriteColor;
}

export interface SortState {
    type?: 'age' | 'name';
    direction: 'ascend' | 'descend';
}

export interface PaginationState {
    pagesTotal?: number;
    currentPage: number;
    itemsPerPage: number;
}

export interface ProcessingState {
    sort: SortState;
    filter: FavoriteColor;
    pagination: PaginationState;
    search: string;
}

export interface Controls {
    sortByAgeBtn: HTMLButtonElement;
    sortByNameBtn: HTMLButtonElement;
    colorButtons: NodeListOf<HTMLButtonElement>;
}
