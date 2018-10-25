import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  loginFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  login(email, password){
    console.log('login ts', email, password);

    return this.authService.login(email, password);
  }
  loginGoogle(){
    console.log('login google');

    return this.authService.loginGoogle();
  }
}
