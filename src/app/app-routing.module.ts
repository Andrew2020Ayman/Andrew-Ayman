import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { SkillsComponent } from './view/skills/skills.component';
import { ProjectsComponent } from './view/projects/projects.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
