import { Component, OnInit } from '@angular/core';
import { books } from '../Types/typeBook';
import { BookServiceService } from '../ServicesList/book-service.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  Books: books[] = []

  constructor(private BookServiceService: BookServiceService) { }


  // card: books[] = []


  name2 = 'Atomic Habits';
  author2 = 'James Clear';
  src2 = 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'

  isDisabled: boolean = false;
  myName: string = 'suman';
  myName2: string = 'suman';
  isBooksHidden: boolean = true;


  ngOnInit(): void {
    this.Books = this.BookServiceService.getBookList();
  }

  handleType(event: any) {
    this.myName = event.target.value
  }

  toggleBooks() {
    this.isBooksHidden = !this.isBooksHidden;
  }

  // addTcart(Book: books) {
  //   console.log(Book)
  // }
}
