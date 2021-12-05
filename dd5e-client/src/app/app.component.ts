import {Component, OnInit} from '@angular/core'
import {IUserDetails, LoginService} from './service/login.service'
import {Router} from '@angular/router'
import {CardsService} from './service/cards.service'
import {interval} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public user?: IUserDetails
  public time?: string

  constructor(private _loginService: LoginService,
              private _router: Router,
              public cardsService: CardsService) {
    this._loginService.getUserDetails().subscribe((user) => {
      if (user) this.user = user
      else this.user = undefined
    })
    interval(1000).subscribe((t) => {
      const date = new Date()
      this.time = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`
    })
  }

  ngOnInit(): void {
  }

  public async logoutClick() {
    await this._loginService.logout()
    await this._router.navigate(['login'])
  }

}
