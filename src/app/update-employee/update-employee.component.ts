import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  constructor(private empUpdate:EmployeeService,private updateParam:ActivatedRoute){
    this.updateParam.params.subscribe(param=>this.idByParam=param);
    this.getEmpByIDSer()
  }

  idByParam:any
  

  updateForm:FormGroup=new FormGroup({
    emailId:new FormControl(),
    id:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl()
  })


  updateEmp(){
    this.empUpdate.updateEmployeeByID(this.updateForm.value.id,this.updateForm.value).subscribe((res)=>console.log(res))
  }

  
getEmpByIDSer(){
  this.empUpdate.getEmployeeByID(this.idByParam.id).subscribe((res)=>
  {
    console.log(res);
    this.updateForm.setValue(res);
    console.log(this.idByParam.id);
  })
}




}
