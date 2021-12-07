import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {DashboardComponent} from './dashboard/dashboard.component'
import {AlignmentsComponent} from './alignments/alignments.component'
import {ClassesComponent} from './classes/classes.component'
import {AlignmentsDetailsComponent} from './alignments/details/details.component'
import {FeatsComponent} from './feats/feats.component'
import {LanguagesComponent} from './languages/languages.component'
import {MagicSchoolsComponent} from './magic-schools/magic-schools.component'
import {MonstersComponent} from './monsters/monsters.component'
import {RacesComponent} from './races/races.component'
import {SkillsComponent} from './skills/skills.component'
import {SpellsComponent} from './spells/spells.component'
import {TraitsComponent} from './traits/traits.component'
import {ClassesDetailsComponent} from './classes/details/details.component'
import {FeatsDetailsComponent} from './feats/details/details.component'
import {LanguagesDetailsComponent} from './languages/details/details.component'
import {MagicSchoolDetailsComponent} from './magic-schools/details/magic-school-details.component'
import {MonstersDetailsComponent} from './monsters/details/details.component'
import {SkillsDetailsComponent} from './skills/details/details.component'
import {SpellsDetailsComponent} from './spells/details/details.component'
import {RacesDetailsComponent} from './races/details/details.component'
import {TraitsDetailsComponent} from './traits/details/details.component'
import {SessionGuard} from '../service/session-guard.service'
import {AdminSessionGuard} from '../service/admin-session-guard.service'

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
        component: AlignmentsDetailsComponent
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
        path: ':feat',
        component: FeatsDetailsComponent
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
        component: LanguagesDetailsComponent
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
        path: ':magic-school',
        component: MagicSchoolDetailsComponent
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
        component: MonstersDetailsComponent
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
        component: RacesDetailsComponent
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
        component: SkillsDetailsComponent
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
        component: SpellsDetailsComponent
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
        component: TraitsDetailsComponent
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminSessionGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
