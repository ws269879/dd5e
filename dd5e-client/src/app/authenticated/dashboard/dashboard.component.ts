import { Component, OnInit } from '@angular/core';
import {CardsService} from '../../service/cards.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {
  }

}

