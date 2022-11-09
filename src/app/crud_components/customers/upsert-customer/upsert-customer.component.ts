import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AutoService} from "../../../service/auto_service/auto.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../../service/customer_service/customer.service";
import {Customer} from "../../../interfaces/customer";
import {AuthService} from "../../../service/login/auth.service";

@Component({
  selector: 'app-add',
  templateUrl: './upsert-customer.component.html',
  styleUrls: ['./upsert-customer.component.css']
})
export class UpsertCustomerComponent implements OnInit {

  id!: number;
  customer!: Customer;
  reactiveForm!: FormGroup;
  token!: any;

  constructor(private route: ActivatedRoute, private customerService: CustomerService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null) {
      this.customerService.getCustomerById(this.id).subscribe((customer: Customer) => {
        this.customer = customer;
        this.reactiveForm.patchValue({
          idUtente: this.customer.idUtente,
          nome: this.customer.nome,
          cognome: this.customer.cognome,
          email: this.customer.email,
          telefono: this.customer.telefono,
          dataNascita: this.customer.dataNascita,
          customer: this.customer.customer
        })
      }, error => console.log(error));
    }
    this.reactiveForm = new FormGroup({
      idUtente: new FormControl(this.id, [Validators.required]),
      nome: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      cognome: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9 ]*')]),
      dataNascita: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required])
    });
  }

  submit() {
    if (this.id != null) {
      this.customerService.updateCustomer(this.id, this.reactiveForm.value).subscribe(res => {
        this.token = localStorage.getItem("token");
        let role = this.authService.getRole(this.token);
        if (role === "ROLE_ADMIN") {
          this.router.navigateByUrl('admin');
        } else if (role === "ROLE_USER") {
          this.router.navigateByUrl("user")
        }
      })
    } else {
      this.customerService.createCustomer(this.reactiveForm.value).subscribe((res: any) => {
        this.router.navigate(['admin']);
      })
    }
  }

}
