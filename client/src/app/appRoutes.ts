import { Routes } from '@angular/router';
import { LoginComponent } from './ressources/login/login.component';
import { RegisterComponent } from './ressources/register/register.component';
import { AppComponent } from './app.component';
import { PanelAjoutVideoComponent } from './ressources/panel-ajout-video/panel-ajout-video.component';



export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: PanelAjoutVideoComponent },
  { path: '**', redirectTo: '' }

];
