import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-saveteachers',
  templateUrl: './saveteachers.component.html',
  styleUrls: ['./saveteachers.component.css']
})
export class SaveteachersComponent {

  constructor(private saveMethod:TeacherService,private roteSave:Router){}

  saveData:any

  saveteacherForm:FormGroup=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    id:new FormControl(),
    subject:new FormControl(),
  })

saveTeacher()
{
this.saveMethod.CreateTeacher(this.saveteacherForm.value).subscribe(res=>{
  console.log(res);
  this.saveData=res;
  alert('user Added')
  this.roteSave.navigate(['Teacher'])

})
}

}
