import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommitsComponent } from './component/commits/commits.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'', component: CommitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
