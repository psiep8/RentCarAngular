import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./views/login/login.component";
import {CustomerTableComponent} from "./data_components/customer-table/customer-table.component";
import {PrenotazioniTableComponent} from "./data_components/prenotazioni-table/prenotazioni-table.component";
import {AutoTableComponent} from "./data_components/auto-table/auto-table.component";
import {UpsertCustomerComponent} from "./crud_components/customers/upsert-customer/upsert-customer.component";
import {UpsertAutoComponent} from "./crud_components/auto/upsert-auto/upsert-auto.component";
import {FilterDateComponent} from "./crud_components/prenotazioni/filter-date/filter-date.component";
import {ListAutoRangeComponent} from "./crud_components/auto/list-auto-range/list-auto-range.component";
import {ListPrenotazioniComponent} from "./crud_components/prenotazioni/list-prenotazioni/list-prenotazioni.component";
import {AuthGuard} from "./service/login/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }, {
    path: 'admin',
    component: CustomerTableComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'user',
    component: PrenotazioniTableComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'auto',
    component: AutoTableComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'admin/upSert',
    component: UpsertCustomerComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'admin/upSert/:id',
    component: UpsertCustomerComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'auto/upSert',
    component: UpsertAutoComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'auto/upSert/:id',
    component: UpsertAutoComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'user/filter',
    component: FilterDateComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'user/filter/:id',
    component: FilterDateComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'user/listAutoRange',
    component: ListAutoRangeComponent,
    canActivate: [AuthGuard]

  }, {
    path: 'admin/prenotazioni',
    component: ListPrenotazioniComponent,
    canActivate: [AuthGuard]

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
