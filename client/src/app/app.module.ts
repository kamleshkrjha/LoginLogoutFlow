import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './_services/authentication.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './_services/loader.service';
import { DetailsComponent } from './details/details.component';
import { UserService } from './_services/user.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    LoginComponent,
    HomeComponent,
    LoaderComponent,
    DetailsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoaderService, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
