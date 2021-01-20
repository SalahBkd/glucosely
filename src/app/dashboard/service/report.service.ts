import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Report} from "../model/Report";
import {catchError} from "rxjs/operators";

const BASE_URL: string = 'http://localhost:3000/reports';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) {
  }

  // CRUD
  getAll(): Observable<Report[]> {
    return this.http.get(BASE_URL)
      .pipe(
        catchError(this.handlError)
      );
  }

  add(report: Report) {
    return this.http.post(BASE_URL, report)
      .pipe(
        catchError(this.handlError)
      );
  }

  update(report: Report) {
    return this.http.put(BASE_URL, report)
      .pipe(
        catchError(this.handlError)
      );
  }

  delete(reportId) {
    const url = `${BASE_URL}/${reportId}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handlError)
      );
  }

  // UTILS
  handlError(error: HttpErrorResponse): Observable<any> {
    return throwError(' a data error occured please try again later.');
  }

}
