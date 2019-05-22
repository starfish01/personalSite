import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserResolver } from './auth/core/user.resolver';
import { HomeComponent } from './admin/home/home.component';
import { ProjectsComponent } from './homepage/projects/projects.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { EditItemComponent } from './admin/edit-item/edit-item.component';
import { GlobalSettingsComponent } from './admin/global-settings/global-settings.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent},
  { path: 'admin', component: AdminComponent,resolve: { data: UserResolver }, children: [
    { path: 'overview/:id', component: OverviewComponent },
    { path: ':section/edit/:id', component: EditItemComponent },
    { path: ':section/add', component:EditItemComponent },
    { path: 'settings', component:GlobalSettingsComponent}
  ]},

  { path: "**", redirectTo: '' }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
