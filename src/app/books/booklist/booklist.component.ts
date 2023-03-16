import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { books } from '../../Types/typeBook';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  @Input() Book: books = {} as books;
  // @Output() emitBook = new EventEmitter<books>();

  isInCard:boolean = false;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  addToCart() {
    // this.emitBook.emit(this.Book);
    this.isInCard = true;
    this.cardService.add(this.Book)
  }

  removeFromCard(){
    this.isInCard = false;
    this.cardService.remove(this.Book)

  }
}
