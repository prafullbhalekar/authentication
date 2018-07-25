import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { SpecialevntsComponent } from './specialevnts/specialevnts.component';


const routes: Routes = [
  
  { path: '', component:LoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterformComponent},
  { path: 'profile', component:ProfileComponent},
  { path: 'events', component:EventsComponent},
 
  { path: 'specialevents', component:SpecialevntsComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
