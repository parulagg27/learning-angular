import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployees} from './employees';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = "/assets/data/employees.json";

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<IEmployees[]> {
    //casted an observable here into an employee array
    return this.http.get<IEmployees[]>(this._url);

    //but observable doesn't return data unless someone subscribes to it
  }
}
