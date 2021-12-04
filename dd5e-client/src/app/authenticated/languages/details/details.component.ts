import { Component, OnInit } from '@angular/core';
import {ApiService, IFeatDetails, ILanguageDetails} from '../../../service/api.service'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class LanguagesDetailsComponent implements OnInit {
  value: string
  details: ILanguageDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['language']
    })

    this.details = await this._apiService.getLanguageDetails(this.value)
  }

}
