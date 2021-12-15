import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit(): void {
    const loginObject = {
      "password": this.loginForm.get('password')?.value,
      "username": this.loginForm.get('username')?.value 
    };
    this.authenticationService.authenticate(loginObject).subscribe(response => {
      this.authenticationService.setToken(response.access_token);
      this.authenticationService.isAuthenticated = true;
      this.router.navigate(['/home']);
    }, error => {
      console.error(error);
    });
  }

}
