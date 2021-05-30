import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginEmail: new FormControl(null),
      loginPwd: new FormControl(null)
    } )


  }
  loginSubmit(){
    console.log("loginin");
    this.router.navigateByUrl('pro');
    
  }

}
