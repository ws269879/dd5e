import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {ApiService, IResponseData} from '../../service/api.service'
import {Subject} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {
  displayedColumns: string[] = ['name']
  dataSource: MatTableDataSource<IResponseData>
  rowClickSubject: Subject<IResponseData> = new Subject()

  constructor(private _apiService: ApiService,
              private _router: Router) {
    this.rowClickSubject.subscribe((alignment) => {
      this._router.navigate(['app', 'spells', alignment.index])
    })
  }

  async ngOnInit() {

    let spells = await this._apiService.getSpells()

    if (!spells) {
      spells = {count: 0, results: []}
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(spells.results);
  }
}
