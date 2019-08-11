import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { GetPointsComponent } from './points/get-points/get-points.component';
import { PostPointsComponent } from './points/post-points/post-points.component';
import { PutPointsComponent } from './points/put-points/put-points.component';
import { DeletePointsComponent } from './points/delete-points/delete-points.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    GetPointsComponent,
    PostPointsComponent,
    PutPointsComponent,
    DeletePointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
