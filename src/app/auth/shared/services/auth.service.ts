import { Injectable, OnInit } from '@angular/core';
import { browserSessionPersistence, indexedDBLocalPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseAuth } from 'src/app/app.module';
import { Store } from 'src/app/store';

export interface User {
  email: string,
  uid: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private store: Store) {
  }

  get user() {
    return firebaseAuth.currentUser;
  }

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
  }

  loginUser(email: string, password: string) {
    return new Promise((resolve: any, reject: any) => {
      setPersistence(firebaseAuth, browserSessionPersistence)
        .then(() => {
          resolve(signInWithEmailAndPassword(firebaseAuth, email, password));
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    })
  }

  signOutUser() {
    return signOut(firebaseAuth);
  }
}
