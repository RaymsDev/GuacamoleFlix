import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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

import { AppComponent } from './app.component';
import { LoginComponent } from './ressources/login/login.component';
import { RegisterComponent } from './ressources/register/register.component';
import { HeaderComponent } from './layouts/header/header.component';
import { loginForm } from './ressources/login-form/login-form';
import { PayComponent } from './pay/pay.component';
import { NavAdminComponent } from './ressources/nav-admin/nav-admin.component';
import { AjoutVideoAdminComponent } from './ressources/ajout-video-admin/ajout-video-admin.component';
import { GestionUsersComponent } from './ressources/gestion-users/gestion-users.component';
import { GestionVideosComponent } from './ressources/gestion-videos/gestion-videos.component';
import { HomePageComponent } from './ressources/home-page/home-page.component';

import { UserComponent } from './ressources/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    loginForm,
    PayComponent,
    NavAdminComponent,
    AjoutVideoAdminComponent,
    GestionUsersComponent,
    GestionVideosComponent,
    PayComponent,
    HomePageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
