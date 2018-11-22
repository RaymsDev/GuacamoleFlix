import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userObservable: Observable<any>;
  constructor(public authService: AuthService, public userService: UserService) { }
  users;

  ngOnInit() {
    this.userObservable = this.authService.getUser();
    console.log(this.userObservable);
    this.getUsers();
  }
  getUserAuth() {
    return this.authService.getUser();
  }
  getUsers() {
  this.userService.getUsers().subscribe((data) => {
      this.users = data; } );
    console.log('this.users');
    console.log(this.users);

  }

}
