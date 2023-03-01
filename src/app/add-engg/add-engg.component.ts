import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router, Routes } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { EngineerService } from '../services/engineer.service';

@Component({
  selector: 'app-add-engg',
  templateUrl: './add-engg.component.html',
  styleUrls: ['./add-engg.component.css']
})
export class AddEnggComponent {

  constructor(private addEng : EngineerService,private engistRoute:Router) {}

  enggData:any

  EnggForm:FormGroup=new FormGroup({
    emailId:new FormControl(),
    firstName:new FormControl(),
    lastName:new FormControl(),
    id:new FormControl(),
  })

  saveEnggSer(){
    this.addEng.saveEngg(this.EnggForm.value).subscribe(res=>{
      console.log(res);
      this.enggData=res;
      alert('user Added')

      this.engistRoute.navigate(['engineer'])

    })
  }

}
