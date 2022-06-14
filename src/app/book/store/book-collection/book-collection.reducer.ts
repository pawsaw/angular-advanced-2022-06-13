import { createReducer, on } from '@ngrx/store';
import { Book } from '../../../../domain';
import {
  createBookComplete,
  createBookStart,
  loadBooksComplete,
  loadBooksStart,
} from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

const initialState: BookCollectionSlice = {
  entities: [],
  loading: false,
};

export const bookCollectionReducer = createReducer(
  initialState,
  on(createBookStart, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(createBookComplete, (state, action) => {
    return {
      ...state,
      entities: [...state.entities, action.book],
      loading: false,
    };
  }),
  on(loadBooksStart, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadBooksComplete, (state, action) => {
    return {
      ...state,
      entities: [...action.books],
      loading: false,
    };
  })
);
