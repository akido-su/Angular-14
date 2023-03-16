import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { AuthServiceService } from './auth/auth-service.service';
import { firebaseConfig } from './firebase.config';


@Component({
    selector: '#sum-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})


export class AppComponent implements OnInit {

    constructor(private authservice: AuthServiceService) {

    }

    ngOnInit() {
        initializeApp(firebaseConfig);
    }

    isAuthenticate(){
        return this.authservice.isAuthenticate
    }

    logout(){
        return this.authservice.logout()
    }
}