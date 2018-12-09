import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../../../../../both/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userObservable: Observable<any>;
  constructor(public authService: AuthService, public router: Router) { }
  userInfo: IUser;
  ngOnInit() {
    this.userObservable = this.authService.getUser();
    this.getUserInfo();

  }
  getUserInfo() {
    this.authService.user.subscribe((user) => {
      this.userInfo = user;
    });

  }

}
