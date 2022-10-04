import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./views/login/login.component";
import {CustomerTableComponent} from "./data_components/customer-table/customer-table.component";
import {PrenotazioniTableComponent} from "./data_components/prenotazioni-table/prenotazioni-table.component";
import {AutoTableComponent} from "./data_components/auto-table/auto-table.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'admin',
    component: CustomerTableComponent
  }, {
    path: 'user',
    component: PrenotazioniTableComponent
  }, {
    path: 'auto',
    component: AutoTableComponent
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
