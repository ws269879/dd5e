import { Component, OnInit } from '@angular/core';
import {ApiService, ILanguageDetails, ISkillDetails} from '../../../service/api.service'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class SkillsDetailsComponent implements OnInit {
  value: string
  details: ISkillDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['skill']
    })

    this.details = await this._apiService.getSkillDetails(this.value)
  }

}
