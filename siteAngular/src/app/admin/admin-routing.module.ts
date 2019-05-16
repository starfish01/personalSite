import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';

const AdminRoutes: Routes = [
    { path: 'admin', component: AdminComponent, children: [
        { path: 'new', component: HomeComponent },
        // { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
        // { path: ':id', component: RecipeDetailComponent },
        // { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
      ] },
]

@NgModule({
    imports:[
        RouterModule.forChild(AdminRoutes)
    ],
    exports:[RouterModule]
})
export class AdminRoutingModule {}