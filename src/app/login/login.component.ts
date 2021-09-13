import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = 'joe@test.com';
  password = '12345';
  isLoggedin: boolean;
  constructor(private auth: AuthenticationService) {
    this.isLoggedin = false;
   }

  ngOnInit(): void {
  }

  async onLogin() {
    this.isLoggedin = await this.auth.login(this.username, this.password);
  }

}
