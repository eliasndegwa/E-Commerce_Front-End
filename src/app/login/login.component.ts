import { Component,OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
//   animations:[
// slideshow idea, void and wildcard use animation class as a basis
//   ]
})
export class LoginComponent implements OnInit{
  @ViewChild('form')form!:NgForm

  constructor(private dialog:MatDialog){}
  ngOnInit(): void {

  }
  onLoginSubmit(){

  } 

  toRegisterPage(){

  }
  resetPassword(){

  }
  openModal(){
    const modal= document.querySelector(".modal") as HTMLElement
    if(modal!==null){
      modal.style.display='block'
    }
  }
  closeModal(){
    const modal= document.querySelector(".modal") as HTMLElement
    if(modal!==null){
      modal.style.display='none'
    }
  }
}