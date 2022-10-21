import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../../../interfaces/customer";
import {CustomerService} from "../../../service/customer_service/customer.service";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  id!: number;
  customer!: Customer;
  reactiveForm!: FormGroup;

  constructor(
    private route: ActivatedRoute, private customerService: CustomerService, private router: Router
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.customerService.getCustomerById(this.id).subscribe((customer: Customer) => {
      this.customer = customer;
      console.log(this.customer)
      console.log(this.customer.id)
    });

    this.reactiveForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      dataDiNascita: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    console.log(this.reactiveForm.value);
    this.customerService.updateCustomer(this.id, this.reactiveForm.value).subscribe(res => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('admin');
    })
  }
}
