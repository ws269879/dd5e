import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {ApiService, IResponseData} from '../../service/api.service'
import {Subject} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-magic-schools',
  templateUrl: './magic-schools.component.html',
  styleUrls: ['./magic-schools.component.css']
})
export class MagicSchoolsComponent implements OnInit {
  displayedColumns: string[] = ['name']
  dataSource: MatTableDataSource<IResponseData>
  rowClickSubject: Subject<IResponseData> = new Subject()

  constructor(private _apiService: ApiService,
              private _router: Router) {
    this.rowClickSubject.subscribe((alignment) => {
      this._router.navigate(['app', 'magicschools', alignment.index])
    })
  }

  async ngOnInit() {

    let magicSchools = await this._apiService.getMagicSchools()

    if (!magicSchools) {
      magicSchools = {count: 0, results: []}
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(magicSchools.results);
  }
}
