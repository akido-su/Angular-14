import { Component, OnInit } from '@angular/core';
import { loginForm } from 'src/app/Types/auth';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email: string = '';
  form: loginForm = {
    email: '',
    password: '',
  }

  constructor(private authService: AuthServiceService) {
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form)
    this.authService.login(this.form);
  }

  isLoading(){
    return this.authService.isLoading;
  }
}
