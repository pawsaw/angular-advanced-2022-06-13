import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Book } from '../../../../domain';
import {
  createBookComplete,
  createBookStart,
  loadBooksComplete,
  loadBooksStart,
} from './book-collection.actions';
import { BookCollectionSlice } from './book-collection.slice';

const adapter = createEntityAdapter<Book>({ selectId: (model) => model.isbn });

const initialState: BookCollectionSlice = {
  ...adapter.getInitialState(),
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
      ...adapter.addOne(action.book, state),
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
      ...adapter.setMany(action.books, state),
      loading: false,
    };
  })
);
