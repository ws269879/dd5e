import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {ApiService, IMonsterDetails, IRaceDetails, IResponseData} from '../../../service/api.service'
import {Subject} from 'rxjs'
import {ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class RacesDetailsComponent implements OnInit {

  value: string
  details: IRaceDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['race']
    })

    this.details = await this._apiService.getRaceDetails(this.value)
  }

}
