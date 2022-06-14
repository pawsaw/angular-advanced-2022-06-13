import { Book } from '@bookm/domain';
import { EntityState } from '@ngrx/entity';

export interface BookCollectionSlice extends EntityState<Book> {
  loading: boolean;
}
