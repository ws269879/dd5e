import { Component, OnInit } from '@angular/core';
import {ApiService, ILanguageDetails, IMagicSchoolDetails} from '../../../service/api.service'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './magic-school-details.component.html',
  styleUrls: ['./magic-school-details.component.css']
})
export class MagicSchoolDetailsComponent implements OnInit {
  value: string
  details: IMagicSchoolDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['magic-school']
    })

    this.details = await this._apiService.getMagicSchoolDetails(this.value)
  }


}
