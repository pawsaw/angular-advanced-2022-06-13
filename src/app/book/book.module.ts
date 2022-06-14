import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book.component';
import { BookNewComponent } from './book-new/book-new.component';
import { StoreModule } from '@ngrx/store';
import { bookFeatureName, bookFeatureReducers } from './store';
import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EffectsModule } from '@ngrx/effects';
import { BookCollectionEffects } from './store/book-collection';

@NgModule({
  declarations: [
    BookComponent,
    BookNewComponent,
    BookListComponent,
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    StoreModule.forFeature(bookFeatureName, bookFeatureReducers),
    EffectsModule.forFeature([BookCollectionEffects]),
  ],
  exports: [BookComponent, BookNewComponent],
})
export class BookModule {}
