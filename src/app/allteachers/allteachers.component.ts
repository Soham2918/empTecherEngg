import { Component } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-allteachers',
  templateUrl: './allteachers.component.html',
  styleUrls: ['./allteachers.component.css']
})
export class AllteachersComponent {

  constructor(private allTeacherMethod:TeacherService){}


  teacherData:any

  allteacherForm:FormGroup=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    id:new FormControl(),
    subject:new FormControl(),
  })

  allTeacherM(){
    this.allTeacherMethod.getAllTeacher().subscribe((res)=>{
      console.log(res);
      this.teacherData=(res);

      
    })
  }

  deleteTeac(id:any){
    this.allTeacherMethod.deleteTeacher(id).subscribe(res=>console.log(res))
  } 


}
