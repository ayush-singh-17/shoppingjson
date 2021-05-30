import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = true;
public userInfo:any;

public otp: any;
  public inputOtp: any;
  public mail: any;
  public info: any;
  public changeData: any;
  public someName: any;
public hivisible=false;
public form1=true;
newuser=false;
em:any=[];
  constructor(
    private http: HttpClient,
    private route: Router,
    private formbuilder: FormBuilder
  ) {
    this.inputOtp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    console.log(this.inputOtp);
   }

  ngOnInit(){
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],//,Validators.pattern('/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/')
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.required],
      cart:[[]],
    })
  }

  verify(){
    console.log("inside verify function")
    console.log(this.inputOtp);

    if(this.otp==this.inputOtp){
       alert("verified user");
       console.log("verified otp")
       this.http.post('http://localhost:3000/user', this.registerForm.value).subscribe(data => {
        console.log(data);
      })
       this.route.navigateByUrl('login');

    }
    else{
      alert( "Wrong OTP")
    }
  }
  onRegister() {
    this.em=this.registerForm.value;
    console.log(this.em);
    this.mail=this.em.email;
    this.someName=this.em.firstName;
    console.log(this.someName);
    console.log(this.mail);
   if (this.registerForm.valid) {
     for(let i=0; i<this.info.length;i++)
     {
       console.log("inside for");

       if(this.mail==this.info[i].email)
       {
           alert("Aleady Registered User. Please enter another email")
           this.route.navigateByUrl('register');
           this.newuser=true;
           break;
       }
     }
     if(!this.newuser)
     {
       console.log("inside onregister new user");


       alert("Verify Your email pppp ")
   this.hivisible=true;
   this.form1=false;
     }

     //this.route.navigateByUrl('login');
   }
 }

//   onRegister(){
// console.log(this.registerForm.value);
// this.http.post('http://localhost:3000/user',this.registerForm.value).subscribe(data=>{
//   this.userInfo=data;
//   console.log("inside post");
  
//   console.log(this.userInfo);
  
// })
//   }
  get h() {
    return this.registerForm.controls;
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  public sendEmail(e: Event) {

    e.preventDefault();
    emailjs.sendForm('service_r70ord9', 'template_3vtjoej', e.target as HTMLFormElement, 'user_ndovXUoLzYUu2WY1LH4Z3')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

  }
}
