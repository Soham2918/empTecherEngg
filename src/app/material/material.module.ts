import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatTableModule} from '@angular/material/table';


const materialComp=[
  [
    MatButtonModule,
    MatTableModule
  ]
]

@NgModule({
  imports: [
  materialComp
  ],
  exports: [
    materialComp
  ]
})
export class MaterialModule { }
