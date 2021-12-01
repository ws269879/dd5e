import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {LoginService} from './login.service'
import {take} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotAuthed implements CanActivate {

  constructor(private _router: Router,
              private _loginService: LoginService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !this._loginService.loggedIn;
  }

}
