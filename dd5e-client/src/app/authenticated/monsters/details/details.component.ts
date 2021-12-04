import { Component, OnInit } from '@angular/core';
import {ApiService, ILanguageDetails, IMonsterDetails} from '../../../service/api.service'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class MonstersDetailsComponent implements OnInit {

  value: string
  details: IMonsterDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['monster']
    })

    this.details = await this._apiService.getMonsterDetails(this.value)
  }

}
