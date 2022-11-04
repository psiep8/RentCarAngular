import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./views/login/login.component";
import {CustomerTableComponent} from "./data_components/customer-table/customer-table.component";
import {PrenotazioniTableComponent} from "./data_components/prenotazioni-table/prenotazioni-table.component";
import {AutoTableComponent} from "./data_components/auto-table/auto-table.component";
import {AddCustomerComponent} from "./crud_components/customers/add-customer/add-customer.component";
import {AddAutoComponent} from "./crud_components/auto/add-auto/add-auto.component";
import {EditAutoComponent} from "./crud_components/auto/edit-auto/edit-auto.component";
import {EditCustomerComponent} from "./crud_components/customers/edit-customer/edit-customer.component";
import {FilterDateComponent} from "./crud_components/prenotazioni/filter-date/filter-date.component";
import {EditDateComponent} from "./crud_components/prenotazioni/edit-date/edit-date.component";
import {ListAutoRangeComponent} from "./crud_components/prenotazioni/list-auto-range/list-auto-range.component";
import {ListPrenotazioniComponent} from "./crud_components/customers/list-prenotazioni/list-prenotazioni.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }, {
    path: 'admin',
    component: CustomerTableComponent
  }, {
    path: 'user',
    component: PrenotazioniTableComponent
  }, {
    path: 'auto',
    component: AutoTableComponent
  }, {
    path: 'admin/add',
    component: AddCustomerComponent
  }, {
    path: 'admin/edit/:id',
    component: EditCustomerComponent
  }, {
    path: 'auto/add',
    component: AddAutoComponent
  }, {
    path: 'auto/edit/:id',
    component: EditAutoComponent
  }, {
    path: 'user/filter',
    component: FilterDateComponent
  }, {
    path: 'user/filter/:id',
    component: EditDateComponent
  }, {
    path: 'user/listAutoRange',
    component: ListAutoRangeComponent
  }, {
    path: 'admin/prenotazioni',
    component: ListPrenotazioniComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
