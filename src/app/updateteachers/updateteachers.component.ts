import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-updateteachers',
  templateUrl: './updateteachers.component.html',
  styleUrls: ['./updateteachers.component.css']
})
export class UpdateteachersComponent {

  constructor(private TeacherUp:TeacherService,private paramTeacher:ActivatedRoute){
    this.paramTeacher.params.subscribe(param=>this.idByParam=param);
    this.getAllTec()

  }

  idByParam:any

  updateteacherForm:FormGroup=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    id:new FormControl(),
    subject:new FormControl(),
  })

getAllTec()
{
  this.TeacherUp.getTeacher(this.idByParam.id).subscribe((res)=>{
    console.log(res);
    this.updateteacherForm.setValue(res)
  })
}

updateTeacher()
{
this.TeacherUp.updateTeacher(this.idByParam).subscribe((res)=>console.log(res))
}

}
