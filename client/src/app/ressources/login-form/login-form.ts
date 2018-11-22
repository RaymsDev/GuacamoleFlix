import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-panel-ajout-video',
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.scss']
})
export class loginForm implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  AccessAdmin()
  {
    console.log("test")
    this.router.navigate(['/login']);
  }
}
