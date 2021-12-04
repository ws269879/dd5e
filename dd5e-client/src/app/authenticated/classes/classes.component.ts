import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {ApiService, IResponseData} from '../../service/api.service'
import {Subject} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  displayedColumns: string[] = ['name']
  dataSource: MatTableDataSource<IResponseData>
  rowClickSubject: Subject<IResponseData> = new Subject()

  constructor(private _apiService: ApiService,
              private _router: Router) {
    this.rowClickSubject.subscribe((alignment) => {
      this._router.navigate(['app', 'classes', alignment.index])
    })
  }

  async ngOnInit() {

    let classes = await this._apiService.getClasses()

    if (!classes) {
      classes = {count: 0, results: []}
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(classes.results);
  }

}
