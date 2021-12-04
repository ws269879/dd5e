import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {ApiService, IResponseData} from '../../service/api.service'
import {Subject} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.css']
})
export class MonstersComponent implements OnInit {
  displayedColumns: string[] = ['name']
  dataSource: MatTableDataSource<IResponseData>
  rowClickSubject: Subject<IResponseData> = new Subject()

  constructor(private _apiService: ApiService,
              private _router: Router) {
    this.rowClickSubject.subscribe((alignment) => {
      this._router.navigate(['app', 'monsters', alignment.index])
    })
  }

  async ngOnInit() {

    let monsters = await this._apiService.getMonsters()

    if (!monsters) {
      monsters = {count: 0, results: []}
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(monsters.results);
  }
}
