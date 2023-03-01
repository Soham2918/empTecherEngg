import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddEnggComponent } from './add-engg/add-engg.component';
import { AllteachersComponent } from './allteachers/allteachers.component';
import { EmployeeComponent } from './employee/employee.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { SaveteachersComponent } from './saveteachers/saveteachers.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateEnggComponent } from './update-engg/update-engg.component';
import { UpdateteachersComponent } from './updateteachers/updateteachers.component';

const routes: Routes = [
  {
    path:'employee',component:ListEmployeeComponent,
  },
  {
    path:'update-employee/:id',component:UpdateEmployeeComponent
  },
  {
    path:'add-employee',component:AddEmployeeComponent
  },
  {
    path:'engineer',component:EngineerComponent
  },
{
  path:'add-engg',component:AddEnggComponent
},
{
  path:'update-engg/:id',component:UpdateEnggComponent
},
{
  path:'Teacher',component:AllteachersComponent
},
{
  path:'saveteachers',component:SaveteachersComponent
},
{
  path:'updateteacher/:id',component:UpdateteachersComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
