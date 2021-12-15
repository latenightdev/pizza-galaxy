import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    const user = new User(this.loginForm.get('password')?.value, this.loginForm.get('username')?.value);
    this.authenticationService.authenticate(user).subscribe(response => {
      this.authenticationService.setToken(response.access_token);
      this.authenticationService.isAuthenticated = true;
      this.toastService.success('User successfully authenticated!');
      this.router.navigate(['/home']);
    }, error => {
      this.toastService.error('Invalid credentials - please try again.')
      console.error(error);
    });
  }

}
