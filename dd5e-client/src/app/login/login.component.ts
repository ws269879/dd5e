import { Component, OnInit } from '@angular/core';
import {IUserDetails, LoginService} from '../service/login.service'
import {take, takeLast} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading: boolean = false

  constructor(private _loginService: LoginService,
              private _router: Router) {
  }

  async ngOnInit() {
  }

  public async loginClick() {
    await this._loginService.login({
      email: 'test@test2.com',
      password: 'test'
    })
    this._router.navigate(['app'])
  }

}
