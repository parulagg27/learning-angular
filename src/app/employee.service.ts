import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IEmployees} from './employees';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = '/assets/data/employees.json';

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<IEmployees[]> {
    return this.http.get<IEmployees[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
