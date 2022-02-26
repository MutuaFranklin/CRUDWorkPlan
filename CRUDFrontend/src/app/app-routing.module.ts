import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { WorkplanGoalComponent } from './components/workplan-goal/workplan-goal.component';
import { WorkplanComponent } from './components/workplan/workplan.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'workplan', component: WorkplanComponent },
  { path: 'workplan-goal/:id', component: WorkplanGoalComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
