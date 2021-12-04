import { NgModule } from '@angular/core'
import {CommonModule} from '@angular/common'
import { AuthenticatedRoutingModule } from './authenticated-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import { SharedModule } from '../component/shared.module'
import { ClassesComponent } from './classes/classes.component'
import { FeatsComponent } from './feats/feats.component'
import { LanguagesComponent } from './languages/languages.component'
import { MagicSchoolsComponent } from './magic-schools/magic-schools.component'
import { MonstersComponent } from './monsters/monsters.component'
import { SkillsComponent } from './skills/skills.component'
import { SpellsComponent } from './spells/spells.component'
import { RacesComponent } from './races/races.component'
import { TraitsComponent } from './traits/traits.component'
import { AlignmentsComponent } from './alignments/alignments.component'
import { AlignmentDetailsComponent } from './alignments/details/details.component'
import { RouterModule } from '@angular/router'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatGridListModule} from '@angular/material/grid-list'
import {ClassesDetailsComponent} from './classes/details/details.component'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [
    DashboardComponent,
    ClassesComponent,
    FeatsComponent,
    LanguagesComponent,
    MagicSchoolsComponent,
    MonstersComponent,
    SkillsComponent,
    SpellsComponent,
    RacesComponent,
    TraitsComponent,
    AlignmentsComponent,
    AlignmentDetailsComponent,
    ClassesDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule
  ]
})
export class AuthenticatedModule { }
