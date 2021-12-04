import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {DashboardComponent} from './dashboard/dashboard.component'
import {AlignmentsComponent} from './alignments/alignments.component'
import {ClassesComponent} from './classes/classes.component'
import {AlignmentDetailsComponent} from './alignments/details/details.component'
import {FeatsComponent} from './feats/feats.component'
import {LanguagesComponent} from './languages/languages.component'
import {MagicSchoolsComponent} from './magic-schools/magic-schools.component'
import {MonstersComponent} from './monsters/monsters.component'
import {RacesComponent} from './races/races.component'
import {SkillsComponent} from './skills/skills.component'
import {SpellsComponent} from './spells/spells.component'
import {TraitsComponent} from './traits/traits.component'
import {ClassesDetailsComponent} from './classes/details/details.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'alignments',
    children: [
      {
        path: '',
        component: AlignmentsComponent
      },
      {
        path: ':alignment',
        component: AlignmentDetailsComponent
      }
    ]
  },
  {
    path: 'classes',
    children: [
      {
        path: '',
        component: ClassesComponent
      },
      {
        path: ':class',
        component: ClassesDetailsComponent
      }
    ]
  },
  {
    path: 'feats',
    children: [
      {
        path: '',
        component: FeatsComponent
      },
      {
        path: ':feats',
        component: AlignmentDetailsComponent
      }
    ]
  },
  {
    path: 'languages',
    children: [
      {
        path: '',
        component: LanguagesComponent
      },
      {
        path: ':languages',
        component: AlignmentDetailsComponent
      }
    ]
  },
  {
    path: 'magicschools',
    children: [
      {
        path: '',
        component: MagicSchoolsComponent
      },
      {
        path: ':magic-schools',
        component: AlignmentDetailsComponent
      }
    ]
  },
  {
    path: 'monsters',
    children: [
      {
        path: '',
        component: MonstersComponent
      },
      {
        path: ':monsters',
        component: AlignmentDetailsComponent
      }
    ]
  },
  {
    path: 'races',
    children: [
      {
        path: '',
        component: RacesComponent
      },
      {
        path: ':races',
        component: AlignmentDetailsComponent
      }
    ]
  },
  {
    path: 'skills',
    children: [
      {
        path: '',
        component: SkillsComponent
      },
      {
        path: ':skills',
        component: AlignmentDetailsComponent
      }
    ]
  },
  {
    path: 'spells',
    children: [
      {
        path: '',
        component: SpellsComponent
      },
      {
        path: ':spells',
        component: AlignmentDetailsComponent
      }
    ]
  },
  {
    path: 'traits',
    children: [
      {
        path: '',
        component: TraitsComponent
      },
      {
        path: ':traits',
        component: AlignmentDetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
