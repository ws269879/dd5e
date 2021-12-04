import { Component, OnInit } from '@angular/core';
import {ApiService, IClassDetails, IFeatDetails} from '../../../service/api.service'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class FeatsDetailsComponent implements OnInit {

  value: string
  details: IFeatDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['feat']
    })

    this.details = await this._apiService.getFeatDetails(this.value)
  }

}
