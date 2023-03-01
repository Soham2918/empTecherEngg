import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineerService } from '../services/engineer.service';

@Component({
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent {

constructor(private enggSer:EngineerService){}

EnggData:any

getEnggSer(){
  this.enggSer.getAllEngg().subscribe((res)=>console.log(res))
  this.enggSer.getAllEngg().subscribe((res)=>console.log(this.EnggData=(res)))
}

deleteEnggSer(id:any){
  this.enggSer.deleteEngg(id).subscribe((res)=>console.log(res))
}


}
