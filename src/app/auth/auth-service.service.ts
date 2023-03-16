import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { loginForm } from '../Types/auth';
import { registerForm } from '../Types/registerAuth';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAuthenticate: boolean = false;
  isLoading: boolean = false;
  isMatch: boolean = true;

  constructor(private router: Router) { }

  login(form: loginForm) {
    if (this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        this.isAuthenticate = true;
        const user = userCredential.user;
        alert("Login Successfull")
        this.router.navigate([''])
        // ...
      })
      .catch((error) => {
        this.isAuthenticate = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error while login!")
      })
      .finally(() =>
        this.isLoading = false
      )
  }

  register(formRegister: registerForm) {
    if (this.isLoading) return;
    this.isLoading = true;
    if (formRegister.password !== formRegister.confirmPassword) {
      this.isMatch = false;
      alert("confirm password is not equal to password")
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, formRegister.email, formRegister.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("userCredential------", userCredential)
        console.log("user------", user)
        this.isLoading = false;
        this.isAuthenticate = true;
      })
      .catch((error) => {
        this.isLoading = true;
        this.isAuthenticate = false;
        console.log("error----", error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      }).finally(() => this.isLoading = false)
  }

  logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login'])
      this.isAuthenticate = false;
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
}
