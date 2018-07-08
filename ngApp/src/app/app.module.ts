import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterformComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  HttpClientModule,
    AppRoutingModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
