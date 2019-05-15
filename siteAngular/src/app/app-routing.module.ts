import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserResolver } from './auth/core/user.resolver';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent},
  { path: 'admin', component: AdminComponent,resolve: { data: UserResolver }},
  { path: "**", redirectTo: '' }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
