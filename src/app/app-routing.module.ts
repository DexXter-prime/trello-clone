import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuardGuard } from "./auth/activate-guard.guard";
import { LoadGuardGuard } from "./auth/load-guard.guard";
import { BoardPageComponent } from "./board-page/board-page.component";
import { CurrentBoardPageComponent } from "./current-board-page/current-board-page.component";


const appRoutes: Routes = [

  {path: '', redirectTo: '/boards', pathMatch: 'full'},
  { path: 'boards',
   component: BoardPageComponent,
   canActivate: [ActivateGuardGuard]
  },
  {
    path: 'boards/:id',
    component: CurrentBoardPageComponent
  },
  {path: 'home', loadChildren: () => import('./entering/enter.module').then(mod => mod.EnterModule), canLoad: [LoadGuardGuard]},
  {path: '**', redirectTo: '/boards'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
