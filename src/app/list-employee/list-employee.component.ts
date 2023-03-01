import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {

  constructor(private EmpList:EmployeeService){}

  empData:any

  empList()
  {
    this.EmpList.getAllEmployees().subscribe((res)=>console.log(res));
    this.EmpList.getAllEmployees().subscribe((res)=>console.log(this.empData=(res)))
  }

  deleteSer(id:any){
    this.EmpList.deleteEmployeeByID(id).subscribe((res)=>console.log(res))
  }




}
