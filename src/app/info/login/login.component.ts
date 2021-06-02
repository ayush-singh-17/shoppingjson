import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  public maill:any;
  public pass:any;
  constructor(private router:Router,
    private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      loginEmail: new FormControl(null),
      loginPwd: new FormControl(null)
    } )


  }
  loginSubmit(){
    console.log("loginin");
    this.maill=this.loginForm.value.loginEmail;
    this.pass=this.loginForm.value.loginPwd;
    if(this.auth.loginAuth(this.maill,this.pass))
    {
      console.log("heyyy under auth");

      alert("login Successfully");
        this.router.navigateByUrl("/products")
    
    }
    this.router.navigateByUrl('pro');
    
  }

}
