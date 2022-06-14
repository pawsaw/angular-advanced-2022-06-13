import { createReducer, on } from '@ngrx/store';
import { createNewBook, loadBooksComplete } from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

const initialState: BookCollectionSlice = {
  entities: [],
};

export const bookCollectionReducer = createReducer(
  initialState,
  on(createNewBook, (state, action) => {
    return {
      ...state,
      entities: [...state.entities, action.book],
    };
  }),
  on(loadBooksComplete, (state, action) => {
    return {
      ...state,
      entities: [...action.books],
    };
  })
);
