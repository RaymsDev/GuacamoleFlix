import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAdmin = false;
  isAuth = false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (!user) {
        this.isAuth = false;
        return;
      }

      this.isAuth = true;
      this.isAdmin = user.isAdmin;
    });
  }
  logout() {
    return this.authService.logout();
  }
}
