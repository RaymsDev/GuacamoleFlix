import { Routes } from '@angular/router';
import { LoginComponent } from './ressources/login/login.component';
import { RegisterComponent } from './ressources/register/register.component';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AjoutVideoAdminComponent } from './ressources/ajout-video-admin/ajout-video-admin.component'
import { GestionUsersComponent } from './ressources/gestion-users/gestion-users.component'
import { GestionVideosComponent } from './ressources/gestion-videos/gestion-videos.component'
=======
import { PanelAjoutVideoComponent } from './ressources/panel-ajout-video/panel-ajout-video.component';
import { HomePageComponent } from './ressources/home-page/home-page.component';
>>>>>>> 9357acc11dfdc55d9273e175870267243da2617f



export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
  { path: 'admin', component: AjoutVideoAdminComponent },
  { path: 'gestion_user', component: GestionUsersComponent },
  { path: 'gestion_video', component: GestionVideosComponent },
=======
  { path: 'admin', component: PanelAjoutVideoComponent },
  { path: '', component: HomePageComponent,  pathMatch: 'full'},
>>>>>>> 9357acc11dfdc55d9273e175870267243da2617f
  { path: '**', redirectTo: '' }

];
