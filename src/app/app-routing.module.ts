import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./views/login/login.component";
import {AdminComponent} from "./views/admin/admin.component";
import {UserComponent} from "./views/user/user.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'user',
    component: UserComponent
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
