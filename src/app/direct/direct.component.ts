import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent {

buttonValue :string= "Become Admin for only 1$"

  isAdmin:boolean = false;
  becomeAdmin():void{
    this.isAdmin =! this.isAdmin
  }
  uGotScammed():void{
    
    if(this.buttonValue === "Become Admin for only 1$"){
      this.buttonValue = "No refund!!";
     } else{
      this.buttonValue = "Become Admin for only 1$"
     }
     
      }
    }
  

