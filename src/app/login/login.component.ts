import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = 'joe@test.com';
  password = '12345';
  // isLoggedin: boolean;
  constructor(private router: Router, private auth: AuthenticationService) {
    // this.isLoggedin = false;
   }

  ngOnInit(): void {
  }

  async onLogin() {
    const isLoggedin = await this.auth.login(this.username, this.password);
    if (isLoggedin) {
      this.router.navigate(["orderlist"]);
    } else {
      alert("Wrong username or password");
    }
  }

}
