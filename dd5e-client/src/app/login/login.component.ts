import {Component, OnInit, ViewChild} from '@angular/core'
import {LoginService} from '../service/login.service'
import {ActivatedRoute, Router} from '@angular/router'
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading: boolean = false
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  error: boolean = false
  registered?: string

  matcher = new MyErrorStateMatcher();

  constructor(private _loginService: LoginService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _snackbar: MatSnackBar) {
    _activatedRoute.queryParams.forEach((query) => {
      this.registered = query['registered'] ? decodeURIComponent(query['registered']) : undefined
    })
  }

  async ngOnInit() {
    if (this.registered) this._snackbar.open(`Successfully registered account for ${this.registered}`, 'Dismiss', {duration: 5000, verticalPosition: 'top'})
  }

  public async submit(data: {email: string, password: string}) {
    this.loading = true
    this.form.controls.email.disable()
    this.form.controls.password.disable()
    if (await this._loginService.login(data)) {
      this._router.navigate(['app'])
    } else {
      this.error = true
      this.loading = false
      this.form.controls.email.enable()
      this.form.controls.password.enable()
      setTimeout(() => {
        this.error = false
      }, 5000)
    }
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
