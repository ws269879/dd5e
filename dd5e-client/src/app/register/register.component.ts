import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {MyErrorStateMatcher} from '../login/login.component'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading: boolean = false
  form: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  error: boolean = false

  matcher = new MyErrorStateMatcher();

  constructor(private _loginService: LoginService,
              private _router: Router) {
  }

  async ngOnInit() {
  }

  public async submit(data: {email: string, password: string, firstname: string, lastname: string}) {
    this.loading = true
    this.form.controls.firstname.disable()
    this.form.controls.lastname.disable()
    this.form.controls.email.disable()
    this.form.controls.password.disable()
    if (await this._loginService.register(data)) {
      this._router.navigate(['login'], {queryParams: {registered: encodeURIComponent(data.email)}})
    } else {
      this.error = true
      this.loading = false
      this.form.controls.firstname.enable()
      this.form.controls.lastname.enable()
      this.form.controls.email.enable()
      this.form.controls.password.enable()
      setTimeout(() => {
        this.error = false
      }, 5000)
    }
  }

}
