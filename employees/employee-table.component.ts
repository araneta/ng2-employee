import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http/src/http';
import { Employee } from "./employee.model";
import { EmployeeService } from "./employee.service";

@Component({
  selector: 'employee-table',
  encapsulation: ViewEncapsulation.None,
  styles: [require('../tables/components/smartTables/smartTables.scss')],
  template: `
    <div class="widgets">

      <div class="row">
        <ba-card title="Daftar Employee" baCardClass="with-scroll">
          <ng2-smart-table 
    [settings]="settings" 
    [source]="source" 
    (deleteConfirm)="onDeleteConfirm($event)"
    (editConfirm)="onSaveConfirm($event)"
    (createConfirm)="onCreateConfirm($event)"></ng2-smart-table>
        </ba-card>
      </div>
    
    </div>

  `
})
export class EmployeeTableComponent implements OnInit{

   settings = {
     hideSubHeader:true,
     add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',      
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      employee_id: {
        title: 'ID Pegawai',
        editable: false
      },
      first_name: {
        title: 'First Name'
      },      
      last_name: {
        title: 'Last Name'
      },      
    }
  };
  //source: ServerDataSource;
  source: LocalDataSource;
  employees: Employee[];
  
  
  constructor(http: Http, private employeeService: EmployeeService) {
    const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
    //this.source = new ServerDataSource(http, {endPoint: 'http://localhost:8080/employee' + token, dataKey:'obj'});
    //this.employees = this.employeeService.getEmployees();
    this.source = new LocalDataSource(this.employees); 
    
  }
  

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log(event);
      console.log(event.data);
      this.employeeService.deleteEmployee(event.data)
          .subscribe(
              result => {
                console.log(result)
                 this.refreshTable();
              }
          );
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onSaveConfirm(event):void {
    if (window.confirm('Are you sure you want to save?')) {
      //event.newData['name'] += ' + added in code';
      console.log(event.newData);      
      this.employeeService.updateEmployee(event.newData)
     .subscribe(
          data => {
             console.log('daxxx');
             console.log(data);
              this.refreshTable();
          },
          error => {            
            console.log(error);
             this.refreshTable();
          }
      );  
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
        this.employeeService.employeeIsNew.subscribe(
            (employee: Employee) => this.source.refresh()
        );
        this.refreshTable();
    }
    refreshTable(){
		console.log('tab employee');
        this.employeeService.getEmployees()
          .subscribe(
              (employees: Employee[]) => {
                  this.employees = employees;
                  console.log('tab employee one');
                  console.log(employees);
                  this.source = new LocalDataSource(this.employees);
              }
          );
    }
}
