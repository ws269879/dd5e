import { Component, OnInit } from '@angular/core';
import {CardsService} from '../../service/cards.service'
import {IUserDetails, LoginService} from '../../service/login.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user?: IUserDetails
  time = new Date().getHours()

  constructor(public cardsService: CardsService,
              private _loginService: LoginService) {
    this._loginService.getUserDetails().subscribe((user) => {
      if (user) this.user = user
      else this.user = undefined
    })
  }

  ngOnInit(): void {
  }

}

