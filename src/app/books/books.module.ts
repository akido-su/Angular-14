import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookServiceService } from '../ServicesList/book-service.service';
import { BooksComponent } from './books.component';
import { BooklistComponent } from './booklist/booklist.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BooksComponent,BooklistComponent],
  imports: [
    CommonModule,FormsModule
  ],
  providers: [BookServiceService],
  exports: [BooksComponent],
})
export class BooksModule { }
