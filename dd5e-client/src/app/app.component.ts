import {Component, OnInit} from '@angular/core'
import {IUserDetails, LoginService} from './service/login.service'
import {Router} from '@angular/router'
import {CardsService} from './service/cards.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public user?: IUserDetails

  constructor(private _loginService: LoginService,
              private _router: Router,
              public cardsService: CardsService) {
  }

  ngOnInit(): void {
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
