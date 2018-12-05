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

  userObservable: any;
  constructor(public authService: AuthService, public userService: UserService) { }
  users;

  ngOnInit() {
    this.userObservable = this.authService.getUser().subscribe(e => {
      return e;
    });
    console.log(this.userObservable);
    this.getUsers(this.userObservable.uid);
  }
  getUserAuth() {
    return this.authService.getUser();
  }
  getUsers(firebaseId) {
  this.userService.getCurrentUser(firebaseId).subscribe((data) => {
      this.users = data; } );
  }

}
