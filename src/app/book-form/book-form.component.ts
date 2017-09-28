import { Component, OnInit } from '@angular/core';
import { Book }    from '../book.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'book-form',
  providers: [],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  model = new Book(1, '', '', 'http://');

  constructor() { }

  ngOnInit() {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newBook() { return JSON.stringify(this.model); }
}
