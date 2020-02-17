import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanListComponent } from '../plans-selector/plan-list/plan-list.component';

const routes: Routes = [
  { path: '', component: PlanListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
