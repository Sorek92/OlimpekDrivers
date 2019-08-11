import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// standard route
import { HomeComponent } from './home/home.component';

// component route for login and register
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// routes to admister points
import { GetPointsComponent } from './points/get-points/get-points.component';
import { PostPointsComponent } from './points/post-points/post-points.component';
import { PutPointsComponent } from './points/put-points/put-points.component';
import { DeletePointsComponent } from './points/delete-points/delete-points.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'points', component: GetPointsComponent },
  { path: 'points/create', component: PostPointsComponent },
  { path: 'points/edit/:id', component: PutPointsComponent },
  { path: 'points/delete/:id', component: DeletePointsComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
