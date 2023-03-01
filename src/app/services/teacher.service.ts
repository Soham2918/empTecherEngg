import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private teacherServ:HttpClient) { }

baseUrl:any=`http://3.110.193.86:4444`;

deleteTeacher(id:any){
return this.teacherServ.delete(`${this.baseUrl}/teacher/delete/${id}`,{responseType:"text"} )
}

getAllTeacher(){
return this.teacherServ.get(`${this.baseUrl}/teacher/getall/` ) 
}

getTeacher(id:any){
return this.teacherServ.get(`${this.baseUrl}/teacher/id/${id}`)
}

CreateTeacher(body:any){
return this.teacherServ.post(`${this.baseUrl}/teacher/save`,body,{responseType:"text"} )
}

updateTeacher(body:any){
return this.teacherServ.put(`${this.baseUrl}/teacher/update`,body,{responseType:"text"} )
}

}
