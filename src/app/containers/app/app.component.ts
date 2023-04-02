import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
import { firebaseAuth } from 'src/app/app.module';
import { AuthService, User } from 'src/app/auth/shared/services/auth.service';
import { Store } from 'src/app/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ulti-project';
  user$!: Observable<User>;
  constructor(private authService: AuthService, private store: Store, private router: Router){

  }

  ngOnInit(){
    onAuthStateChanged(firebaseAuth, (next) => {
      console.log("app component", next)
      if (!next){
        this.store.set('user', null);
        return
      }else{
        console.log('existing user')
        const { email, uid} = next;
        this.store.set('user', {email, uid});
      }
    });
    this.user$ = this.store.select<User>("user")
  }

  async onLogout(){
    await this.authService.signOutUser();
    this.store.set('user',null);
    this.router.navigate(['/auth/login']);
  }
}
