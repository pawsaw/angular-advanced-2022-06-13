import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '@bookm/domain';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]> = of([]);

  constructor() {}

  ngOnInit(): void {}
}
