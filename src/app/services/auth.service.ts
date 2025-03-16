import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  get user$(): Observable<any> {
    return new Observable(subscriber => {
      return this.auth.onAuthStateChanged(subscriber);
    });
  }

  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  }
}
