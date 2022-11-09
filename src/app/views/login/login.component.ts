import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/login/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm!: FormGroup;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required,
          Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
        ])
      })
  }

  onSubmit(): void {
    this.authService.login(this.reactiveForm.value.email, this.reactiveForm.value.password).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.isLoginFailed = false;
        let role = this.authService.getRole(data.token);
        if (role === "ROLE_ADMIN") {
          this.router.navigateByUrl('admin')
        } else {
          this.router.navigateByUrl('user')
        }
      },
      (err: any) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      });
  }

  get getControl() {
    if (this.reactiveForm != null) {
      return this.reactiveForm.controls;
    }
    return null;
  }


}
