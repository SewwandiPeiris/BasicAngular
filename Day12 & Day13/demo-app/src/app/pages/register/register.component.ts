import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //public stName:any;
  //public stAge:any;

  /*public btnRegisterClick(){
    console.log(this.stName);
    console.log(this.stAge);
  }*/

  public student ={                //object
    name:null,
    age:null
  }

  public studentList:Array<any>=[];

  public btnRegisterClick(){
    console.log(this.student);
    this.studentList.push(this.student);
    this.student = {                  //text box eka clear venv
      name:null,
      age:null
    }
  }

  public btnClearClick(){
    this.studentList=[];
  }

}
