import {FormControl, Validators} from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }


  ngOnInit() {
  }
  loginFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  register(email, password){
    console.log('register ts', email, password);

    return this.authService.register(email, password);
  }
  loginGoogle(){
    console.log('login google');

    return this.authService.loginGoogle();
  }

}
