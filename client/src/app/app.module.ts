import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PanelAjoutVideoComponent } from './panel-ajout-video/panel-ajout-video.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'recettes', component: PanelAjoutVideoComponent },
];

@NgModule({
  declarations: [
    AppComponent, PanelAjoutVideoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
