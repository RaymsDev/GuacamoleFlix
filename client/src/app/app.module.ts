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
import { PanelAjoutVideoComponent } from './ressources/panel-ajout-video/panel-ajout-video.component';
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    PanelAjoutVideoComponent,
    PayComponent
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
