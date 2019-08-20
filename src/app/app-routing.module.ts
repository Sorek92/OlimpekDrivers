import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// standard route
import { HomeComponent } from './home/home.component';

// component route for login and register
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// routes to admister points
import { GetPointsComponent } from './points/get-points/get-points.component';
import { CreatePointsComponent } from './points/create-points/create-points.component';
import { UpdatePointsComponent } from './points/update-points/update-points.component';
import { DeletePointsComponent } from './points/delete-points/delete-points.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'points', component: GetPointsComponent },
  { path: 'points/create', component: CreatePointsComponent },
  { path: 'points/edit/:id', component: UpdatePointsComponent },
  { path: 'points/delete/:id', component: DeletePointsComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
