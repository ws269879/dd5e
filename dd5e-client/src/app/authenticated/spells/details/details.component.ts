import { Component, OnInit } from '@angular/core';
import {ApiService, ISkillDetails, ISpellDetails} from '../../../service/api.service'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class SpellsDetailsComponent implements OnInit {
  value: string
  details: ISpellDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['spell']
    })

    this.details = await this._apiService.getSpellDetails(this.value)
  }

}
