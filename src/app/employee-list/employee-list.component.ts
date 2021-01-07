import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employees List</h2>
    <p> {{errorMsg}} </p>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);
  }

}
