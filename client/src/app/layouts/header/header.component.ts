import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userObservable: Observable<any>;
  show = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userObservable = this.authService.getUser();
    console.log(this.userObservable);
  }
  getUserAuth(){
    return this.authService.getUser();
  }
  logout(){
    return this.authService.logout();
  }


}