import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules from me
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { GetPointsComponent } from './points/get-points/get-points.component';
import { CreatePointsComponent } from './points/create-points/create-points.component';
import { UpdatePointsComponent } from './points/update-points/update-points.component';
import { DeletePointsComponent } from './points/delete-points/delete-points.component';

// services
import { PointsService} from './points.service';
// 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    GetPointsComponent,
    CreatePointsComponent,
    UpdatePointsComponent,
    DeletePointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
