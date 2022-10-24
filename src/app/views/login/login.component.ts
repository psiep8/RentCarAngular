import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../service/login/auth.service";
import {StorageService} from "../../service/login/storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm!: FormGroup;
  roles: string[] = [];
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, private storageService: StorageService) {
  }

  ngOnInit(): void {
    if (this.storageService.getToken()) {
      this.roles = this.storageService.getUser().roles;
      console.log(this.roles)
    }
    this.reactiveForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      })
    console.log(this.reactiveForm)
  }

  onSubmit(): void {
    this.authService.login(this.reactiveForm.value.email, this.reactiveForm.value.password).subscribe({
      next: data => {
        this.storageService.saveToken(data.accessToken)
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.roles = this.storageService.getUser().roles;
        window.location.reload();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

}
