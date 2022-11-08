import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../../interfaces/customer";
import {CustomerService} from "../../../service/customer_service/customer.service";
import {AuthService} from "../../../service/login/auth.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  id!: number;
  customer!: Customer;
  reactiveForm!: FormGroup;
  token!: any;

  constructor(
    private route: ActivatedRoute, private customerService: CustomerService, private router: Router, private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.customerService.getCustomerById(this.id).subscribe((customer: Customer) => {
      this.customer = customer;
    }, error => console.log(error));

    this.reactiveForm = new FormGroup({
      idUtente: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      dataNascita: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required])
    });
  }

  submit() {
    console.log(this.reactiveForm.value);
    this.customerService.updateCustomer(this.id, this.reactiveForm.value).subscribe(res => {
      console.log('Post updated successfully!');
      this.token = localStorage.getItem("token");
      let role = this.authService.getRole(this.token);
      if (role === "ROLE_ADMIN") {
        this.router.navigateByUrl('admin');
      } else if (role === "ROLE_USER") {
        this.router.navigateByUrl("user")
      }
    })
  }
}
