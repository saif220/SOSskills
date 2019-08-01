import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8081/consultant/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getConsultants(): Observable<any> {
    return this.http.get(endpoint + 'all').pipe(
      map(this.extractData));
  }

  addConsultant(consultant): Observable<any> {
    console.log(consultant);
    return this.http.post<any>(endpoint + 'add', JSON.stringify(consultant), httpOptions).pipe(
      tap((product) => console.log(`added consultant w/ id=${consultant.id}`)),
      catchError(this.handleError<any>('addConsultant'))
    );
  }

  findConsultantbyId(id): Observable<any> {
    return this.http.get<any>(endpoint + 'findbyid/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted user id=${id}`)),
      catchError(this.handleError<any>('deleteUser'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
