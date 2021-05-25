import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ExperiencesComponent } from './views/experiences/experiences.component';
import { SkillsComponent } from './views/skills/skills.component';
import { ContactMeComponent } from './views/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'experiences' ,component:ExperiencesComponent},
  { path:'skills' ,component:SkillsComponent},
  { path:'contact-me' ,component:ContactMeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
