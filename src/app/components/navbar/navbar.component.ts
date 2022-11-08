import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/login/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../interfaces/customer";
import {CustomerService} from "../../service/customer_service/customer.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token!: any;
  email!: any;
  customer!: Customer;
  id!: number;

  constructor(public authService: AuthService, private router: Router, private customerService: CustomerService, private route: ActivatedRoute) {
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
    this.email = this.authService.getEmail(this.token);
    this.customerService.getUserByEmail(this.email).subscribe(data => {
        this.customer = data;
        console.log(this.customer);
        console.log(this.customer.idUtente)
        this.router.navigate(['admin/edit', this.customer.idUtente]);
      }
    )
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
