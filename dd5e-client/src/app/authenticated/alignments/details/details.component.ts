import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {ApiService, IAlignmentDetails} from '../../../service/api.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class AlignmentsDetailsComponent implements OnInit {

  value: string
  details: IAlignmentDetails

  constructor(private _route: ActivatedRoute,
              private _apiService: ApiService) { }

  async ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.value = params['alignment']
    })

    this.details = await this._apiService.getAlignmentDetails(this.value)
  }

}
