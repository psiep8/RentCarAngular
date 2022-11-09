import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from "./components/footer/footer.component";
import {LoginComponent} from './views/login/login.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {TabellaComponent} from "./components/tabella/tabella.component";
import {ButtonComponent} from "./components/button/button.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "./components/tabella/pipes/filter.pipe";
import {OrderPipe} from "./components/tabella/pipes/order.pipe";
import {PaginationPipe} from "./components/tabella/pipes/pagination.pipe";
import {CustomerTableComponent} from './data_components/customer-table/customer-table.component';
import {HttpClientModule} from "@angular/common/http";
import {InMemoryDataService} from './service/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {PrenotazioniTableComponent} from './data_components/prenotazioni-table/prenotazioni-table.component';
import {AutoTableComponent} from './data_components/auto-table/auto-table.component';
import {UpsertCustomerComponent} from './crud_components/customers/upsert-customer/upsert-customer.component';
import {UpsertAutoComponent} from './crud_components/auto/upsert-auto/upsert-auto.component';
import {AuthInterceptorProvider} from "./service/login/auth-interceptor";
import {FilterDateComponent} from './crud_components/prenotazioni/filter-date/filter-date.component';
import {ListAutoRangeComponent} from './crud_components/auto/list-auto-range/list-auto-range.component';
import {ListPrenotazioniComponent} from './crud_components/prenotazioni/list-prenotazioni/list-prenotazioni.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    TabellaComponent,
    ButtonComponent,
    FilterPipe,
    OrderPipe,
    PaginationPipe,
    CustomerTableComponent,
    PrenotazioniTableComponent,
    AutoTableComponent,
    UpsertCustomerComponent,
    UpsertAutoComponent,
    FilterDateComponent,
    ListAutoRangeComponent,
    ListPrenotazioniComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(
    // InMemoryDataService
  ],
  providers: [AuthInterceptorProvider, FilterPipe],
  bootstrap: [AppComponent]
})

export class AppModule {
}
