import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HomeComponent } from './view/home/home.component';
import { ProjectsComponent } from './view/projects/projects.component';
import { AboutComponent } from './view/about/about.component';
import { SkillsComponent } from './view/skills/skills.component';

import { OwlModule } from "ngx-owl-carousel";
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
