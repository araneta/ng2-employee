import { CommonModule }  from '@angular/common';
import { NgModule }      from '@angular/core';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './employee.routing';

import { FormsModule } from '@angular/forms';
import { Forms } from './forms.component';
import { Inputs } from './components/inputs';
import { Layouts } from './components/layouts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DatepickerModule, DatePickerComponent } from 'ng2-bootstrap/components/datepicker';

//import { EmployeeListComponent } from "./employee-list.component";
import { EmployeeComponent } from "./employee.component";
import { EmployeeInputComponent } from "./employee-input.component";
import { EmployeeTableComponent } from "./employee-table.component";
import { EmployeeService } from "./employee.service";

import { ReligionService } from "../religion/religion.service";
import { ReligionDropdownComponent } from "../religion/religion-dropdown.component"

import { MaritalStatusService } from "../maritalstatus/maritalstatus.service";
import { MaritalStatusDropdownComponent } from "../maritalstatus/maritalstatus-dropdown.component"

import { EmploymentStatusService } from "../employmentstatus/employmentstatus.service";
import { EmploymentStatusDropdownComponent } from "../employmentstatus/employmentstatus-dropdown.component"

import { EmploymentTypeService } from "../employmenttypes/employmenttype.service";
import { EmploymentTypeDropdownComponent } from "../employmenttypes/employmenttype-dropdown.component"

import { UnitOfWorkService } from "../unitofworks/unitofwork.service";
import { UnitOfWorkDropdownComponent } from "../unitofworks/unitofwork-dropdown.component"

@NgModule({
  imports: [
		CommonModule,
		routing,
		FormsModule,
	   NgaModule,
	   ModalModule,
	   Ng2SmartTableModule,
	   DatepickerModule,
		
  ],
  declarations: [
	
    EmployeeComponent,
    EmployeeInputComponent,
    EmployeeTableComponent,   
    ReligionDropdownComponent,
    MaritalStatusDropdownComponent,
    EmploymentStatusDropdownComponent,
    EmploymentTypeDropdownComponent,
    UnitOfWorkDropdownComponent
    
  ],
  providers: [EmployeeService, ReligionService, MaritalStatusService, 
	EmploymentStatusService, EmploymentTypeService, UnitOfWorkService],
})
export default class EmployeeModule {}
