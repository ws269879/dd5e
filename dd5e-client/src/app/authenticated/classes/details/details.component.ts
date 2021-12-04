import { Component, OnInit } from '@angular/core';
import {ApiService, IClassDetails} from '../../../service/api.service'
import {ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class ClassesDetailsComponent implements OnInit {

  value: string
  details: IClassDetails
  proficiencyChoicesOpen: boolean = true

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['class']
    })

    this.details = await this._apiService.getClassDetails(this.value)
  }

}
