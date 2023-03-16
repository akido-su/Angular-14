import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth/auth.module";
import { BooksModule } from "./books/books.module";
import { CardComponent } from './card/card.component';

@NgModule({
    declarations:[AppComponent, CardComponent],
    imports:[BrowserModule,BooksModule,AppRoutingModule,AuthModule],
    bootstrap:[AppComponent]
})
export class AppModule { }