import {AppState} from '../models';

/* Default state of the application */
export const state: AppState = {
    users: [
        {name: 'Sam', age: 30, favoriteColor: 'blue'},
        {name: 'Nancy', age: 21, favoriteColor: 'green'},
        {name: 'Guido', age: 22, favoriteColor: 'red'},
        {name: 'Marta', age: 20, favoriteColor: 'green'},
        {name: 'Natali', age: 19, favoriteColor: 'orange'},
        {name: 'Viktor', age: 18, favoriteColor: 'orange'},
        {name: 'Tomas', age: 16, favoriteColor: 'blue'},
        {name: 'Kate', age: 12, favoriteColor: 'green'},
        {name: 'Peter', age: 17, favoriteColor: 'blue'},
        {name: 'Denis', age: 25, favoriteColor: 'red'},
    ],
    activeFilters: {
        sortBy: null,
        colorFilter: null
    }
};
