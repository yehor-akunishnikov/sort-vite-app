export type FavoriteColor = 'red' | 'blue' | 'orange' | 'green';
export type SortOption = 'name' | 'age';

export interface User {
    name: string;
    age: number;
    favoriteColor: FavoriteColor;
}

export interface FiltersState {
    sortBy: SortOption | null;
    colorFilter: FavoriteColor | null;
}

export interface Controls {
    sortByAgeBtn: HTMLButtonElement;
    sortByNameBtn: HTMLButtonElement;
    colorButtons: NodeListOf<HTMLButtonElement>;
}

export interface AppState {
    users: User[];
    activeFilters: FiltersState;
}
