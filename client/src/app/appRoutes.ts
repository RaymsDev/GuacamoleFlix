import { Routes } from '@angular/router';
import { LoginComponent } from './ressources/login/login.component';
import { RegisterComponent } from './ressources/register/register.component';
import { AppComponent } from './app.component';
import { AjoutVideoAdminComponent } from './ressources/ajout-video-admin/ajout-video-admin.component'
import { GestionUsersComponent } from './ressources/gestion-users/gestion-users.component'
import { GestionVideosComponent } from './ressources/gestion-videos/gestion-videos.component'



export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AjoutVideoAdminComponent },
  { path: 'gestion_user', component: GestionUsersComponent },
  { path: 'gestion_video', component: GestionVideosComponent },
  { path: '**', redirectTo: '' }

];
