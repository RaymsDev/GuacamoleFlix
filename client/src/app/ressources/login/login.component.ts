import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  hide: boolean;
  constructor(private authService: AuthService,
    private router: Router) { }

  loginFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit() {
    this.hide = true;
  }
  login(email, password) {
    this.authService.login(email, password)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
  loginGoogle() {
    this.authService.loginGoogle()
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
