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
import {TabellaComponent} from "./components/tabella/tabella.component";
import {ButtonComponent} from "./components/button/button.component";
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./components/tabella/pipes/filter.pipe";
import {OrderPipe} from "./components/tabella/pipes/order.pipe";
import {PaginationPipe} from "./components/tabella/pipes/pagination.pipe";
import {FilterpagePipe} from "./components/tabella/pipes/filterpage.pipe";
import {CustomerTableComponent} from './data_components/customer-table/customer-table.component';
import {HttpClientModule} from "@angular/common/http";
import {InMemoryDataService} from './service/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import { PrenotazioniTableComponent } from './data_components/prenotazioni-table/prenotazioni-table.component';
import { AutoTableComponent } from './data_components/auto-table/auto-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    TabellaComponent,
    ButtonComponent,
    FilterPipe,
    OrderPipe,
    PaginationPipe,
    FilterpagePipe,
    CustomerTableComponent,
    PrenotazioniTableComponent,
    AutoTableComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
