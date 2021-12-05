import { Component, OnInit } from '@angular/core';
import {ApiService, ISkillDetails, ITraitDetails} from '../../../service/api.service'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class TraitsDetailsComponent implements OnInit {
  value: string
  details: ITraitDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['trait']
    })

    this.details = await this._apiService.getTraitDetails(this.value)
  }

}
