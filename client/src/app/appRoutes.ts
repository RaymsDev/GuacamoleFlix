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

import { AuthGuard } from './services/auth.guard';
import { AdminGuard } from './services/admin.guard';


export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'video/:id', component: VideoPageComponent, canActivate: [AuthGuard] },
  { path: 'gestion_category', component: AddCategoryComponent, canActivate: [AdminGuard] },
  { path: 'me', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AjoutVideoAdminComponent, canActivate: [AdminGuard] },
  { path: 'gestion_user', component: GestionUsersComponent, canActivate: [AdminGuard] },
  { path: 'gestion_video', component: GestionVideosComponent, canActivate: [AdminGuard] },
  { path: '', component: HomePageComponent, pathMatch: 'full', },
  { path: '**', redirectTo: '' }

];

