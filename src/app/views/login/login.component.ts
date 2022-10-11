import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/login/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      })

    console.log(this.reactiveForm)
  }

  submitForm() {
    let user = this.reactiveForm?.value
    this.authService.login(user.email, user.password);
    //redirect momentanea
    this.router.navigate(['admin'])
    console.log(this.authService.login(user.email, user.password))
  }

  onLogout() {
    this.authService.deleteToken();
  }
}
