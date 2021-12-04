import { NgModule } from '@angular/core'
import { CommonModule, DatePipe } from '@angular/common'
import {SkeletonComponent} from './skeleton/skeleton.component'
import {CardComponent} from './card/card.component'
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [
    SkeletonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgxSkeletonLoaderModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [
    DatePipe
  ],
  exports: [
    SkeletonComponent,
    CardComponent
  ]
})
export class SharedModule {
}
