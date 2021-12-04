import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthenticatedRoutingModule } from './authenticated-routing.module'
import { DashboardComponent } from './dashboard/dashboard.component'
import {SharedModule} from '../component/shared.module'
import { ClassesComponent } from './classes/classes.component'
import { FeatsComponent } from './feats/feats.component'
import { LanguagesComponent } from './languages/languages.component'
import { MagicSchoolsComponent } from './magic-schools/magic-schools.component'
import { MonstersComponent } from './monsters/monsters.component'
import { SkillsComponent } from './skills/skills.component'
import { SpellsComponent } from './spells/spells.component'
import { RacesComponent } from './races/races.component'
import { TraitsComponent } from './traits/traits.component'
import { AlignmentsComponent } from './alignments/alignments.component';
import { DetailsComponent } from './details/details.component'
import {RouterModule} from '@angular/router';

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
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AuthenticatedRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class AuthenticatedModule { }
