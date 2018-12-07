import { FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from './../../../../../both/models/user.model';
import { ISubscription } from '../../../../../both/models/subscription.model';
import { Router } from '@angular/router';

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
  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.hide = false;
  }
  register(email, password, name) {

    return this.authService.register(email, password).subscribe(user => {
      const data: IUser = {
        _id: null,
        idFirebase: user.user.uid,
        name: name,
        isActive: false,
      };
      return this.userService.createUser(data).subscribe(() => {
        this.router.navigate(['/']);
      });
    });
  }
  loginGoogle() {

    return this.authService.loginGoogle().subscribe(user => {
      const data: IUser = {
        _id: null,
        idFirebase: user.user.uid,
        name: user.user.displayName,
        isActive: false,
      };
      return this.userService.createUser(data).subscribe(userco => {
        this.router.navigate(['/']);
      });
    });
  }

}
