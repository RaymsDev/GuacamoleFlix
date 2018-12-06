import { Routes } from '@angular/router';
import { LoginComponent } from './ressources/login/login.component';
import { RegisterComponent } from './ressources/register/register.component';
import { AjoutVideoAdminComponent } from './ressources/ajout-video-admin/ajout-video-admin.component';
import { GestionUsersComponent } from './ressources/gestion-users/gestion-users.component';
import { GestionVideosComponent } from './ressources/gestion-videos/gestion-videos.component';
import { AddCategoryComponent } from './ressources/add-category/add-category.component';
import { HomePageComponent } from './ressources/home-page/home-page.component';
import { UserComponent } from './ressources/user/user.component';
import { VideoPageComponent } from './ressources/video-page/video-page.component';



export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'video/:id', component: VideoPageComponent },
  { path: 'user', component: UserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AjoutVideoAdminComponent },
  { path: 'gestion_user', component: GestionUsersComponent },
  { path: 'gestion_video', component: GestionVideosComponent },
  { path: 'gestion_category', component: AddCategoryComponent },
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' }

];
