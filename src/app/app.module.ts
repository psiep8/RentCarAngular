import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from "./components/footer/footer.component";
import { LoginComponent } from './views/login/login.component';
import { UserComponent } from './views/user/user.component';
import { AdminComponent } from './views/admin/admin.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
