import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EngineerService } from '../services/engineer.service';

@Component({
  selector: 'app-update-engg',
  templateUrl: './update-engg.component.html',
  styleUrls: ['./update-engg.component.css']
})
export class UpdateEnggComponent {

  constructor(private updateEnggParam:ActivatedRoute,private updateEngSer:EngineerService){
    this.updateEnggParam.params.subscribe(param=>this.updateData=param);
    this.getEmpByIDServ()
  }

  updateData:any

  updateForm:FormGroup=new FormGroup({
    id:new FormControl(''),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    emailId:new FormControl(''),
  })

  updateEng()
  {
    this.updateEngSer.updateEngg(this.updateForm.value.id,this.updateForm.value).subscribe((res)=>console.log(res))
  }

  getEmpByIDServ(){
    this.updateEngSer.getAllEnggByID(this.updateData.id).subscribe((res)=>{
      console.log(res);
      this.updateForm.setValue(res)
    })
  }

}
