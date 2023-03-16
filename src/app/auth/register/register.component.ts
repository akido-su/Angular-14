import { Component, OnInit } from '@angular/core';
import { registerForm } from 'src/app/Types/registerAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: registerForm = {
    email: '',
    password: '',
    confirmPassword: ''
  }



  constructor(private authServiceService: AuthServiceService) { }

  ngOnInit(): void {
  }

  submitregister() {
    console.log(this.formRegister)
    this.authServiceService.register(this.formRegister)
  }


  isLoading(){
    return this.authServiceService.isLoading;
  }

}
