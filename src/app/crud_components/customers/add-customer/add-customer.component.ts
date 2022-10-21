import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AutoService} from "../../../service/auto_service/auto.service";
import {Router} from "@angular/router";
import {CustomerService} from "../../../service/customer_service/customer.service";
import {Customer} from "../../../interfaces/customer";

@Component({
  selector: 'app-add',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  reactiveForm!: FormGroup;
  customer!: Customer;

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      dataNascita: new FormControl('', [Validators.required]),

    });

  }

  submit() {
    console.log(this.reactiveForm.value);
    this.customerService.createCustomer(this.reactiveForm.value).subscribe((res: any) => {
      console.log('Post created successfully!');
      this.router.navigate(['admin']);
    })
  }

}
