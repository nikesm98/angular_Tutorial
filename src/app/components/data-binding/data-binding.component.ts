import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string, number, bool, date

  courseName : string = "Nikhil Singh";
  inputType = "CheckBox";

  rollNo : number = 34;

  isIndian : boolean = false;
  currentDate : Date = new Date();


  constructor(){
    this.courseName;

  }

}
