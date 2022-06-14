import { Book } from '@bookm/domain';

export interface BookCollectionSlice {
  loading: boolean;
  entities: Book[];
}
