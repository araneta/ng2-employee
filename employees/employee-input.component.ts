import { Component, OnInit,ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import {DatepickerModule, DatePickerComponent } from 'ng2-bootstrap/components/datepicker';


import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.model";

import { Religion } from "../religion/religion.model";
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

@Component({
    selector: 'employee-input',
    templateUrl: './employee-input.component.html',
   
})
export class EmployeeInputComponent implements OnInit {
	
    employee: Employee;
   @ViewChild('f') f: NgForm;

    constructor(private employeeService: EmployeeService, 
		private maritalStatusService:MaritalStatusService,  
		private employmentStatusService:EmploymentStatusService, 
		private employmentTypeService:EmploymentTypeService,
		private unitOfWorkService:UnitOfWorkService ) {
		
		
		let employee = new Employee();
		//employee.firstName = "Fname";
		//employee.lastName = "lname";
		//employee.religion = "8";
		this.employee = employee;
	}

    onSubmit(form: NgForm) {
		console.log('dasds');
		console.log(form.value);
		console.log('-----')
		let employeex = new Employee();
		employeex.bind(form.value);
		console.log(employeex);
		//return;
		
        if (this.employee.id==null) {
            // Edit
            this.employee.firstName = form.value.firstName;
            this.employee.lastName = form.value.lastName;
            this.employee.employeeId = form.value.username;            
            this.employeeService.updateEmployee(this.employee)
                .subscribe(
                    result => console.log(result)
                );
            this.employee = null;
        } else {
            // Create
            //let employee = new Employee(form.value.firstName,form.value.lastName,form.value.username, form.value.religion, 1);
            //employee.password = form.value.password;
            //employee.placeOfBirth = form.value.placeOfBirth;
            let employee = new Employee();
            employee.bind(form.value);
            this.employeeService.addEmployee(employee)
                .subscribe(
                    data => console.log(data),
                    // error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.employee = null;
        form.resetForm();
    }

    ngOnInit() {
		this.employeeService.employeeIsEdit.subscribe(
            (employee: Employee) => this.employee = employee
        );
        
    }
    clickSave(){
		
		document.getElementById('btnSave').click();
    }
    reset(){
		
		document.getElementById('btnReset').click();
    }
}
