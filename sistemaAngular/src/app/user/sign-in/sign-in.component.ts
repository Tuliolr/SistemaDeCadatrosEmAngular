import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from './../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private UserService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  OnSubmit(userName,password) {
    this.UserService.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;

    });
      
  }

}
