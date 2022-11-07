import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/login/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token!: any;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate([''])
  }

  onAutoList() {
    this.router.navigateByUrl("auto")
  }

  onProfile() {
    this.router.navigateByUrl("admin")
  }

  toHome() {
    let role = this.authService.getRole(this.token);
    if (role === "ROLE_ADMIN") {
      this.router.navigateByUrl("admin")
    } else {
      this.router.navigateByUrl("user");
    }
  }
}
