import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employees List</h2>
    <ul *ngFor="let employee of employees">
          <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data);
        //after subscription to observable, the employee data arrives asynchronously or observable returns data asynchronously
        // we then assign this data to our class property using fat arrow syntax & bind it with view
  }

}
