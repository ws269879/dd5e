import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import {LoginComponent} from './login/login.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {RegisterComponent} from './register/register.component'
import {SessionGuard} from './service/session-guard.service'
import {NotAuthed} from './service/not-authed.service'

const appRoutes: Routes = [
  {
    path: 'app',
    canActivate: [SessionGuard],
    loadChildren: () => import('./authenticated/authenticated.module').then(m => m.AuthenticatedModule)
  },
  {
    path: 'login',
    canActivate: [NotAuthed],
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'app'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
