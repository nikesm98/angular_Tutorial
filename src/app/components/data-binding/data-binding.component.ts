import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string, number, bool, date

  courseName : string = "Angular 18";
  inputType = "radio";

  rollNo : number = 34;
  myClassName : string = "bg-primary";

  isIndian : boolean = false;
  currentDate : Date = new Date();

  firstname = signal("Nikhil Singh Mahara")


  constructor(){
    this.courseName;

  }

  showalert(message : string){
    alert(message)
  }

  changeCourseName(){
    this.courseName = "React"
    this.firstname.set("Nikesm98")
  }

}
