import { Injectable } from '@angular/core';
import { books } from '../Types/typeBook';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  card: Array<books> = [];

  constructor() { }


  add(book: books) {
    console.log("book----add------", book)
    this.card.push(book);
  }

  get() {
    return this.card;
  }

  remove(book: books) {
    this.card = this.card.filter((b) => b != book)
  }
}
