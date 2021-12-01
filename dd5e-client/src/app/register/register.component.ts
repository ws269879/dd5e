import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  async ngOnInit() {
    await this._loginService.register({
      email: 'test@test2.com',
      password: 'test',
      firstname: 'we be testing',
      lastname: 'yes we do'
    })
  }

}
