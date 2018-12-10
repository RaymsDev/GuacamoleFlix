import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Intern dependencies
import { MaterialModule } from './material.module';
import { environment } from './../environments/environment';
import { appRoutes } from './appRoutes';

// services
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth.guard';


import { AppComponent } from './app.component';
import { LoginComponent } from './ressources/login/login.component';
import { RegisterComponent } from './ressources/register/register.component';
import { HeaderComponent } from './layouts/header/header.component';
import { LoginFormComponent } from './ressources/login-form/login-form';
import { PayComponent } from './pay/pay.component';
import { NavAdminComponent } from './ressources/nav-admin/nav-admin.component';
import { AjoutVideoAdminComponent } from './ressources/ajout-video-admin/ajout-video-admin.component';
import { GestionUsersComponent } from './ressources/gestion-users/gestion-users.component';
import { GestionVideosComponent } from './ressources/gestion-videos/gestion-videos.component';
import { HomePageComponent } from './ressources/home-page/home-page.component';
import { AddCategoryComponent } from './ressources/add-category/add-category.component';

import { UserComponent } from './ressources/user/user.component';
import { VideoPlayerComponent } from './ressources/video-player/video-player.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { CarouselComponent } from './ressources/carousel/carousel.component';
import { GuacaPlayComponent } from './ressources/guaca-play/guaca-play.component';
import { VideoService } from './services/video.service';
import { CategoryService } from './services/category.service';
import { VideoPageComponent } from './ressources/video-page/video-page.component';
import { AdminGuard } from './services/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HeaderComponent,
    LoginFormComponent,
    PayComponent,
    NavAdminComponent,
    AjoutVideoAdminComponent,
    GestionUsersComponent,
    GestionVideosComponent,
    PayComponent,
    VideoPageComponent,
    VideoPlayerComponent,
    HomePageComponent,
    AddCategoryComponent,
    GuacaPlayComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    YoutubePlayerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [AuthService, UserService, VideoService, CategoryService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
