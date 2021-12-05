import { Injectable } from '@angular/core';
import {from, Observable, ReplaySubject, switchMap, take} from 'rxjs'
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userDetails$: Observable<IUserDetails | null>
  public loggedIn: boolean = false
  private baseUrl = environment.loginApi
  private _userDetailsSubject: ReplaySubject<IUserDetails | null> = new ReplaySubject(1)
  private _userDetails?: IUserDetails

  private baseOptions = {
    withCredentials: true
  }

  constructor(private _http: HttpClient) {
    this.userDetails$ = this._userDetailsSubject.asObservable()
  }


  getUserDetails(lazyFetch = false): Observable<IUserDetails | null> {
    if (lazyFetch && !this._userDetails) {
      return from(this.fetchUserDetails())
        .pipe(switchMap((_) => this._userDetailsSubject.asObservable()))
    }
    return this._userDetailsSubject.asObservable()
  }

  async logout() {
    try {
      const url = `${this.baseUrl}/logout`
      await this._http.get<IUserDetails>(url, this.baseOptions).toPromise()
      this._userDetailsSubject.next(null)
      this.loggedIn = false
      return true
    } catch (e) {
      return false
    }
  }

  async login(body: ILoginDetails) {
    try {
      const response = await this._http.post(`${this.baseUrl}/login`, body, {
        ...this.baseOptions,
        observe: 'response'
      }).toPromise()
      if (response?.status === 200) {
        this._userDetails = await this._http.get<IUserDetails>(`${this.baseUrl}/details`, this.baseOptions).toPromise()
        if (this._userDetails) {
          this._userDetailsSubject.next(this._userDetails)
          this.loggedIn = true
          return true
        }
      }
    } catch (e) {
      this.loggedIn = false
      console.log(e)
      return false
    }
    this.loggedIn = false
    return false
  }

  async register(body: IRegisterDetails) {
    try {
      const url = `${this.baseUrl}/register`
      this._userDetails = await this._http.post<IUserDetails>(url, body, this.baseOptions).toPromise()
      return true
    } catch (e) {
      return false
    }
  }

  public async fetchUserDetails() {
    try {
      this._userDetails = await this._http.get<IUserDetails>(`${this.baseUrl}/details`, this.baseOptions).toPromise()
      if (this._userDetails) {
        this._userDetailsSubject.next(this._userDetails)
        this.loggedIn = true
        return this._userDetails
      }
      this._userDetailsSubject.next(null)
      return null
    } catch (e) {
      this._userDetailsSubject.next(null)
      return null
    }
  }
}

export interface IRegisterDetails extends ILoginDetails{
  firstname: string,
  lastname: string
}

export interface ILoginDetails {
  email: string,
  password: string
}

export interface IUserDetails {
  firstName: string,
  lastName: string,
  email: string,
  admin?: boolean
}
