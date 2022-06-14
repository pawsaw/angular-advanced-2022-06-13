import { createEntityAdapter } from '@ngrx/entity';
import { createSelector } from '@ngrx/store';
import { Book } from '@bookm/domain';
import { bookFeature } from '../book.feature';

const bookCollectionSlice = createSelector(
  bookFeature,
  (feature) => feature.bookCollection
);

const adapter = createEntityAdapter<Book>({ selectId: (model) => model.isbn });

export const { selectEntities: bookById, selectAll: bookCollection } =
  adapter.getSelectors(bookCollectionSlice);

export const bookByIsbn = (isbn: string) =>
  createSelector(bookById, (books) => books[isbn]);
