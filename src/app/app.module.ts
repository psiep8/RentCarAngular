import {NgModule, Pipe} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {ButtonComponent} from "./button/button.component";
import {FilterPipe} from "./pipes/filter.pipe";
import {OrderPipe} from "./pipes/order.pipe";
import {TabellaComponent} from "./tabella/tabella.component";
import {FilterpagePipe} from "./pipes/filterpage.pipe";
import {PaginationPipe} from "./pipes/pagination.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    TabellaComponent,
    OrderPipe,
    FilterPipe,
    PaginationPipe,
    FilterpagePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
