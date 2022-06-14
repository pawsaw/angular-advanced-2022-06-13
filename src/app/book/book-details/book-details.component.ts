import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../../../domain';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book | null> = of(null);

  constructor(private readonly _route: ActivatedRoute) {
    _route.params.subscribe(({ isbn }) => {
      // load book
    });
  }

  ngOnInit(): void {}
}
