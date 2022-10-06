import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {


  studentobj: StudentModel = new StudentModel;

  formValue !: FormGroup;
  employeeData: any;


  constructor( private api:ApiService, private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({

      name : [''],
      email : [''],
      mobile : ['']

    })
    this.alldetails();
    console.log(this.alldetails)
  }

  

  
  
  alldetails(){
    this.api.getmethod()
    .subscribe(res=>{
      this.employeeData = res
    })
  }
}



//     getAllEmployee(){
//       this.api.getmethod()
//       .subscribe(res=>{
//         this.employeeData = res;
//       })
//     }
// }
