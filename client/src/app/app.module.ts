import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PanelAjoutVideoComponent } from './panel-ajout-video/panel-ajout-video.component';
import { PayComponent } from './pay/pay.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'recettes', component: PanelAjoutVideoComponent },
];

@NgModule({
  declarations: [
    AppComponent, PanelAjoutVideoComponent, PayComponent
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
