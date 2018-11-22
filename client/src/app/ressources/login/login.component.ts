import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  // loginFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  userObservable: Observable<any>;
  ngOnInit() {
    this.userObservable = this.authService.getUser();
    if (this.userObservable) {
      console.log(this.userObservable);
      // this.router.navigate(['/user']);
    }
  }
  login(email, password) {
    console.log('login ts', email, password);

    return this.authService.login(email, password);
  }
  loginGoogle() {
    console.log('login google');

    return this.authService.loginGoogle();
  }
}
