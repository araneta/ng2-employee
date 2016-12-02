import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Employee } from "./employee.model";
import { ErrorService } from "../../errors/error.service";
import { GlobalState} from "../../global.state";


@Injectable()
export class EmployeeService {
    private employees: Employee[] = [];
    employeeIsEdit = new EventEmitter<Employee>();
    employeeIsNew = new EventEmitter<Employee>();

    constructor(private http: Http, private errorService: ErrorService, private _state:GlobalState) {    
    }

    addEmployee(employee: Employee) {
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post(this._state.getServiceURL()+ '/employees' + token, body, {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                const employee = new Employee()
                   
                this.employees.push(result.obj);
                this.employeeIsNew.emit(employee);
                return employee;
            })
            .catch((error: Response) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });
    }

    getEmployees() {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.get(this._state.getServiceURL()+'/employees'+token)
            .map((response: Response) => {
                const employees = response.json().obj;
                let transformedEmployees: Employee[] = [];
                for (let employee of employees) {
                    transformedEmployees.push(employee
                    );
                }
                this.employees = transformedEmployees;
                return transformedEmployees;
            })
            .catch((error: Response) => {
				if(error!=null){
    				console.log(error);
    				console.log(this.errorService);
                    this.errorService.handleError(error);
                    return Observable.throw(error);
                }
            });
    }

    editEmployee(employee: Employee) {
        this.employeeIsEdit.emit(employee);
    }

    updateEmployee(employee: Employee) {
        const body = JSON.stringify(employee);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.put(this._state.getServiceURL()+ '/employees/' + employee.id + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
				console.log('updater');
				console.log(error);
                this.errorService.handleError(error);
                return Observable.throw(error);
            });
    }

    deleteEmployee(employee: Employee) {
        this.employees.splice(this.employees.indexOf(employee), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(this._state.getServiceURL()+'/employees/'+employee.id + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error);
                return Observable.throw(error);
            });
    }
}
