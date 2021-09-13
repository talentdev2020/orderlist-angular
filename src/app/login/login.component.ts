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

  constructor(private auth: AuthenticationService) {
    
   }

  ngOnInit(): void {
  }

  async onLogin() {
    console.log("s")
    const response = await this.auth.login(this.username, this.password);
    console.log(response)
    if (response) {
      console.log("true")
    }
  }

}
