import { Routes } from '@angular/router';
import { LoginComponent } from './ressources/login/login.component';
import { RegisterComponent } from './ressources/register/register.component';
import { AppComponent } from './app.component';
import { AjoutVideoAdminComponent } from './ressources/ajout-video-admin/ajout-video-admin.component'
import { GestionUsersComponent } from './ressources/gestion-users/gestion-users.component'
import { GestionVideosComponent } from './ressources/gestion-videos/gestion-videos.component'
import { HomePageComponent } from './ressources/home-page/home-page.component';



export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AjoutVideoAdminComponent },
  { path: 'gestion_user', component: GestionUsersComponent },
  { path: 'gestion_video', component: GestionVideosComponent },
  { path: '', component: HomePageComponent,  pathMatch: 'full'},
  { path: '**', redirectTo: '' }

];
