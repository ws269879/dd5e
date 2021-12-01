import { Component } from '@angular/core';
import {IUserDetails, LoginService} from './service/login.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public user?: IUserDetails

  constructor(private _loginService: LoginService,
              private _router: Router) {
    this._loginService.getUserDetails().subscribe((user) => {
      if (user) this.user = user
      else this.user = undefined
    })
  }

  public async logoutClick() {
    await this._loginService.logout()
    await this._router.navigate(['login'])
  }

}
