import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from "./components/footer/footer.component";
import {LoginComponent} from './views/login/login.component';
import {UserComponent} from './views/user/user.component';
import {AdminComponent} from './views/admin/admin.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {CustomersComponent} from "./entities/customers/customers.component";
import {CustomerTableComponent} from "./data_components/customer-table/customer-table.component";
import {TabellaComponent} from "./components/tabella/tabella.component";
import {ButtonComponent} from "./components/button/button.component";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./components/tabella/pipes/filter.pipe";
import {OrderPipe} from "./components/tabella/pipes/order.pipe";
import {PaginationPipe} from "./components/tabella/pipes/pagination.pipe";
import {FilterpagePipe} from "./components/tabella/pipes/filterpage.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    CustomerTableComponent,
    TabellaComponent,
    ButtonComponent,
    FilterPipe,
    OrderPipe,
    PaginationPipe,
    FilterpagePipe
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
