import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {DashboardComponent} from './dashboard/dashboard.component'
import {AlignmentsComponent} from './alignments/alignments.component'
import {ClassesComponent} from './classes/classes.component'
import {DetailsComponent} from './details/details.component'
import {FeatsComponent} from './feats/feats.component'
import {LanguagesComponent} from './languages/languages.component'
import {MagicSchoolsComponent} from './magic-schools/magic-schools.component'
import {MonstersComponent} from './monsters/monsters.component'
import {RacesComponent} from './races/races.component'
import {SkillsComponent} from './skills/skills.component'
import {SpellsComponent} from './spells/spells.component'
import {TraitsComponent} from './traits/traits.component'

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
        component: DetailsComponent
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
        component: DetailsComponent
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
        path: ':feat',
        component: DetailsComponent
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
        path: ':language',
        component: DetailsComponent
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
        path: ':school',
        component: DetailsComponent
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
        path: ':monster',
        component: DetailsComponent
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
        path: ':race',
        component: DetailsComponent
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
        path: ':skill',
        component: DetailsComponent
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
        path: ':spell',
        component: DetailsComponent
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
        path: ':trait',
        component: DetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
