import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationsComponent } from './components/educations/educations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'experiences' ,component:ExperiencesComponent},
  { path:'educations' ,component:EducationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
