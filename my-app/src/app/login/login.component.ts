import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted:boolean = false;
  password = "password";
  show;
  dataSource;
 



  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
  });
  }
  get f() { return this.loginForm.controls; }

  onClick(){
    if (this.password === "password"){
      this.show = true;
      this.password = "text";
    }
    else {
      this.show = false;
      this.password = "password";
    }
  }


  onSubmit() {
    this.isSubmitted = true;
    if(this.loginForm.valid){
      let randomNubmber = Date.now().toString();
    localStorage.setItem("id", randomNubmber);
    } 
  }
}
