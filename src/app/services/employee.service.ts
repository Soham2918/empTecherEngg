import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private empServ:HttpClient) { }
  
  baseUrl:any=`http://3.110.193.86:4444`

  saveEmp(body:any){
    return this.empServ.post(`${this.baseUrl}/employee/`,body )
  }

  getAllEmployees(){
    return this.empServ.get(`${this.baseUrl}/employee/employees`)
  }

  deleteEmployeeByID(id:any){
    return this.empServ.delete(`${this.baseUrl}/employee/id/${id}`)
  }

  getEmployeeByID(id:any){
    return this.empServ.get(`${this.baseUrl}/employee/id/${id}`)
  }

  updateEmployeeByID(id:any,body:any){
    return this.empServ.put(`${this.baseUrl}/employee/id/${id}`,body)
  }


}
