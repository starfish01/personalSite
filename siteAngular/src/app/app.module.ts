import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './homepage/header/header.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page1Component } from './homepage/page1/page1.component';
import { ProjectsComponent } from './homepage/projects/projects.component';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { ContactComponent } from './homepage/contact/contact.component';
import { CoursesComponent } from './homepage/courses/courses.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './auth/login/login.component';

import {RegisterComponent} from './auth/register/register.component'


import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/core/auth.service';
import { UserService } from './auth/core/user.service';
import { AuthGuard } from './auth/core/auth.guard';
import { HttpClientModule } from '@angular/common/http';


export const firebaseConfig = environment.firebaseConfig;
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserResolver } from './auth/core/user.resolver';
import { HomeComponent } from './admin/home/home.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';


//admin




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthComponent,
    HeaderComponent,
    Page1Component,
    ProjectsComponent,
    ContactComponent,
    CoursesComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    // AdminModule
    // CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    ReactiveFormsModule,
    HttpClientModule,
    AdminRoutingModule,
    AdminModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [AuthService, UserService,RegisterComponent, AuthGuard, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
