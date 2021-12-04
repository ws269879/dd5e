import {Component, OnInit} from '@angular/core'
import {MatTableDataSource} from '@angular/material/table'
import {ApiService, IResponseData} from '../../service/api.service'
import {Router} from '@angular/router'
import {Subject} from 'rxjs'

@Component({
  selector: 'app-alignments',
  templateUrl: './alignments.component.html',
  styleUrls: ['./alignments.component.scss']
})
export class AlignmentsComponent implements OnInit {
  displayedColumns: string[] = ['name']
  dataSource: MatTableDataSource<IResponseData>
  rowClickSubject: Subject<IResponseData> = new Subject()

  constructor(private _apiService: ApiService,
              private _router: Router) {
    this.rowClickSubject.subscribe((alignment) => {
      this._router.navigate(['app', 'alignments', alignment.index])
    })
  }

  async ngOnInit() {

    let alignments = await this._apiService.getAlignments()

    if (!alignments) {
      alignments = {count: 0, results: []}
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(alignments.results);
  }
}
