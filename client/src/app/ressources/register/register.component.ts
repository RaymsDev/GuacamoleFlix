import {FormControl, Validators} from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from './../../../../../both/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) { }


  loginFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit() {
  }
  register(email, password) {
    console.log('register ts', email, password);

    return this.authService.register(email, password).then( user => {
      const data: IUser = {
        _id: null,
        idFirebase: user.user.uid,
        name: user.user.displayName ? user.user.displayName : 'test user',
        isActive: false,
        subscription: {
          _id: '5be445285a2b5e412c910af8'
        }
      };
      return this.userService.createUser(data, user.user.refreshToken).subscribe(userco => {
        console.log(userco);
      });
    });
  }
  loginGoogle() {
    console.log('login google');

    return this.authService.loginGoogle();
  }

}
