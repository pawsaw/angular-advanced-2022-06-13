import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookNewComponent } from './book-new/book-new.component';
import { StoreModule } from '@ngrx/store';
import { bookCollectionReducer, bookFeature } from './store';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [BookComponent, BookNewComponent, BookListComponent, BookDetailsComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    StoreModule.forFeature(bookFeature, {
      bookCollection: bookCollectionReducer,
    }),
  ],
  exports: [BookComponent, BookNewComponent],
})
export class BookModule {}
