import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService, User } from '../services/auth.service';
import { Store } from 'src/app/store';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from 'src/app/app.module';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store:Store){

  }

  canActivate(){
    return new Promise<boolean>((resolve:any, reject:any)=>{
      onAuthStateChanged(firebaseAuth, (next) => {
        console.log("auth gurad component", next)
        if (!next){
          this.router.navigate(['/auth/login']);
          return resolve(false);
        }else{
          return resolve(true);
        }
      });    
    })
  }  
}
