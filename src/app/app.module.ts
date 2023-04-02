import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './containers/app/app.component';
import { Store } from './store';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HealthModule } from './health/health.module';
import { getDatabase } from "firebase/database";

export const ROUTES: Routes = [
  {path:'', pathMatch: 'full', redirectTo: '/schedules'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  imports: [
    BrowserModule, AuthModule, RouterModule.forRoot(ROUTES), HealthModule
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Your web app's Firebase configuration
const firebaseConfig:FirebaseOptions = {
  apiKey: "AIzaSyBsItJ6Tgs6UZVKwNNJL_Jkkh29mSw4la4",
  authDomain: "ultimate-fitness-app-e8103.firebaseapp.com",
  databaseURL: "https://ultimate-fitness-app-e8103-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ultimate-fitness-app-e8103",
  storageBucket: "ultimate-fitness-app-e8103.appspot.com",
  messagingSenderId: "567728485207",
  appId: "1:567728485207:web:234d204f992493c1458412"
};

// Initialize Firebase
export const firebaseInit = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseInit);
export const fireDatabase = getDatabase(firebaseInit)