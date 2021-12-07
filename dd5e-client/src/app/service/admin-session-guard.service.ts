import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {take} from 'rxjs'
import {LoginService} from './login.service'

@Injectable({
  providedIn: 'root'
})
export class AdminSessionGuard implements CanActivate {

  constructor(private _loginService: LoginService,
              private _router: Router) { }


  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userDetails = await this._loginService.getUserDetails(true).pipe(take(1)).toPromise()
    if (userDetails && userDetails.role.toLowerCase() === 'admin') {
      return true
    } else {
      await this._router.navigate(['app'])
      return false
    }
  }
}
