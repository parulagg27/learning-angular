import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-details-list',
  template: `
    <h2>Employees Details</h2>
    <p>{{errorMsg}}</p>
    <div *ngFor="let employee of employees">
          <p>{{employee.id}}. {{employee.name}}, {{employee.age}}</p>
    </div>
  `,
  styleUrls: ['./employee-details-list.component.css']
})
export class EmployeeDetailsListComponent implements OnInit {
  employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }

}
