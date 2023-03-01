import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EngineerComponent } from './engineer/engineer.component';
import { AddEnggComponent } from './add-engg/add-engg.component';
import { UpdateEnggComponent } from './update-engg/update-engg.component';
import { AllteachersComponent } from './allteachers/allteachers.component';
import { SaveteachersComponent } from './saveteachers/saveteachers.component';
import { UpdateteachersComponent } from './updateteachers/updateteachers.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    ListEmployeeComponent,
    EngineerComponent,
    AddEnggComponent,
    UpdateEnggComponent,
    AllteachersComponent,
    SaveteachersComponent,
    UpdateteachersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
