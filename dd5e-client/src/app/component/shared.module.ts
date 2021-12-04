import { NgModule } from '@angular/core'
import { CommonModule, DatePipe } from '@angular/common'
import {SkeletonComponent} from './skeleton/skeleton.component'
import {CardComponent} from './card/card.component'
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {RouterModule} from '@angular/router';
import { TableComponent } from './table/table.component'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'
import {MatPaginatorModule} from '@angular/material/paginator'

@NgModule({
  declarations: [
    SkeletonComponent,
    CardComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgxSkeletonLoaderModule,
    MatButtonModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    SkeletonComponent,
    CardComponent,
    TableComponent
  ]
})
export class SharedModule {
}
