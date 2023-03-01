import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private addEmp:EmployeeService, private empRoute:Router){}

  SaveEmpForm:FormGroup=new FormGroup ({
    id:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    emailId:new FormControl()
  })

saveEmp()
{
  this.addEmp.saveEmp(this.SaveEmpForm.value).subscribe((res)=>console.log(res))
  alert('user Added')

  this.empRoute.navigate(['employee'])
}

}
