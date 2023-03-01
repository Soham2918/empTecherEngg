import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

constructor(private engServ:HttpClient) { }

baseUrl:any=`http://3.110.193.86:4444`


getAllEngg(){
  return this.engServ.get(`${this.baseUrl}/engineer`)
}

deleteEngg(id:any){
  return this.engServ.delete(`${this.baseUrl}/engineer/${id}`)
}

updateEngg(id:any, body:any)
{
  return this.engServ.put(`${this.baseUrl}/engineer/${id}`,body)
}

saveEngg(body:any)
{
  return this.engServ.post(`${this.baseUrl}/engineer`, body)
}

getAllEnggByID(id:any){
  return this.engServ.get(`${this.baseUrl}/engineer/${id}`)
}
}
