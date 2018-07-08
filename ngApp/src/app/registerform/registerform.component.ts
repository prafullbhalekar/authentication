import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
   registerUserData = {}
   constructor( private _auth: AuthService
  , private _router: Router) { }

  ngOnInit() {
  }
 registerUser() {
  this._auth.registerUser(this.registerUserData)
  .subscribe(
    res => {
      console.log(res)
      this._router.navigate(['/profile'])
    },
    err => console.log(err)
  )
 }
}
