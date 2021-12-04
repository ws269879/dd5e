import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {LoginService} from './login.service'
import {take} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private _router: Router,
              private _loginService: LoginService) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true
    const userDetails = await this._loginService.getUserDetails(true).pipe(take(1)).toPromise()
    if (userDetails) {
      return true
    } else {
      await this._router.navigate(['login'])
      await this._loginService.logout()
      return false
    }
  }

}
