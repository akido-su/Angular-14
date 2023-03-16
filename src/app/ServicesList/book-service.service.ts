import { Injectable } from '@angular/core';

@Injectable()
export class BookServiceService {

  constructor() { }

  getBookList() {
    return [
      {
        name: 'clean code',
        author: 'suman saurav das',
        src: 'https://m.media-amazon.com/images/I/71K84j2O8wL._SL1500_.jpg',
        amount: 234,
      },
      {
        name: 'Atomic Habits',
        author: 'James Clear',
        src: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
        amount: 2312,
      },
      {
        name: 'Atomic Habits',
        author: 'James Clear',
        src: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
        amount: 2312,
      },
      {
        name: 'Atomic Habits',
        author: 'James Clear',
        src: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
        amount: 2312,
      },
      {
        name: 'Atomic Habits',
        author: 'James Clear',
        src: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
        amount: 2312,
      },
      {
        name: 'Atomic Habits',
        author: 'James Clear',
        src: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
        amount: 2312,
      }
    ];
  }
}
