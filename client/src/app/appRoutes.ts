import { Routes } from '@angular/router';
import { LoginComponent } from './ressources/login/login.component';
import { RegisterComponent } from './ressources/register/register.component';
import { AppComponent } from './app.component';
import { PanelAjoutVideoComponent } from './ressources/panel-ajout-video/panel-ajout-video.component';
import { HomePageComponent } from './ressources/home-page/home-page.component';



export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: PanelAjoutVideoComponent },
  { path: '', component: HomePageComponent,  pathMatch: 'full'},
  { path: '**', redirectTo: '' }

];
