import { FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from './../../../../../both/models/user.model';
import { ISubscription } from '../../../../../both/models/subscription.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  password: string;
  email: string;
  name: string;
  hide: boolean;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.hide = false;
  }
  register(email, password, name) {

    return this.authService.register(email, password).then(user => {
      const data: IUser = {
        _id: null,
        idFirebase: user.user.uid,
        name: name,
        isActive: false,
        subscription: {
          _id: '5be445285a2b5e412c910af8'
        }
      };
      return this.userService.createUser(data, user.user.qa).subscribe(userco => {
        console.log(userco);
      });
    });
  }
  loginGoogle() {
    console.log('login google');

    return this.authService.loginGoogle().then(user => {
      const data: IUser = {
        _id: null,
        idFirebase: user.user.uid,
        name: user.user.displayName,
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

}
