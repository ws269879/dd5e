import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {ApiService, IUserRow} from '../../../service/api.service'
import {Subject} from 'rxjs'
import {Router} from '@angular/router'
import {IUserDetails, LoginService} from '../../../service/login.service'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user?: IUserDetails
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'createdAt', 'role']
  dataSource: MatTableDataSource<IUserRow>
  rowClickSubject: Subject<IUserRow> = new Subject()

  constructor(private _apiService: ApiService,
              private _router: Router,
              private _loginService: LoginService,
              private _snackbar: MatSnackBar) {
    this._loginService.getUserDetails().subscribe((user) => {
      if (user) this.user = user
      else this.user = undefined
    })
    this.rowClickSubject.subscribe(async (user) => {
      if (!this.user) return
      if (this.user && this.user.email === user.email) {
        this._snackbar.open('Cant delete yourself', 'dismiss', {duration: 5000, verticalPosition: 'top'})
      } else {
        if (confirm(`Are you sure you want to delete ${user.firstname} ${user.lastname} (${user.email})`)) {
          const success = await this._apiService.deleteUser(user.email)
          if (success) {
            await this.loadData()
            this._snackbar.open(`Successfully deleted ${user.firstname} ${user.lastname} (${user.email})`, 'dismiss', {duration: 5000, verticalPosition: 'top'})
          }
        }
      }

    })
  }

  async ngOnInit() {
    await this.loadData()
  }

  async loadData() {

    let users = await this._apiService.getUsers()

    if (!users) {
      users = []
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

}
