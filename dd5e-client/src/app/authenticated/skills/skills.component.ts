import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {ApiService, IResponseData} from '../../service/api.service'
import {Subject} from 'rxjs'
import {Router} from '@angular/router'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  displayedColumns: string[] = ['name']
  dataSource: MatTableDataSource<IResponseData>
  rowClickSubject: Subject<IResponseData> = new Subject()

  constructor(private _apiService: ApiService,
              private _router: Router) {
    this.rowClickSubject.subscribe((alignment) => {
      this._router.navigate(['app', 'skills', alignment.index])
    })
  }

  async ngOnInit() {

    let skills = await this._apiService.getSkills()

    if (!skills) {
      skills = {count: 0, results: []}
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(skills.results);
  }
}
