import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth) { }

register(user:User){
    return createUserWithEmailAndPassword(this.auth, user.email, user.password)
}
login(user:User){
    return signInWithEmailAndPassword(this.auth, user.email, user.password)
}

logout(){
    return signOut(this.auth)
}

loginWithGoogle() {
  return signInWithPopup(this.auth, new GoogleAuthProvider());
}



}
