import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
//   animations:[
// slideshow idea, void and wildcard use animation class as a basis
//   ]
})
export class LoginComponent {
  @ViewChild('form')form!:NgForm

  onLoginSubmit(){

  } 

  toRegisterPage(){

  }
}