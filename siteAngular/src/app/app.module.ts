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



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AuthComponent,
    HeaderComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
