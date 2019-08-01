import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpointTech = 'http://localhost:8081/technique/';
const endpointMetier = 'http://localhost:8081/metier/';
const endpointFonction = 'http://localhost:8081/fonction/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getTechniques(): Observable<any> {
    return this.http.get(endpointTech + 'all').pipe(
      map(this.extractData));
  }

  addTechnique(technique): Observable<any> {
    console.log(technique);
    return this.http.post<any>(endpointTech + 'add', JSON.stringify(technique), httpOptions).pipe(
      tap((product) => console.log(`added user w/ id=${technique.id}`)),
      catchError(this.handleError<any>('addTechnique'))
    );
  }


  getMetiers(): Observable<any> {
    return this.http.get(endpointMetier + 'all').pipe(
      map(this.extractData));
  }

  addMetier(metier): Observable<any> {
    console.log(metier);
    return this.http.post<any>(endpointMetier + 'add', JSON.stringify(metier), httpOptions).pipe(
      tap((product) => console.log(`added metier w/ id=${metier.id}`)),
      catchError(this.handleError<any>('addMetier'))
    );
  }

  getFonctions(): Observable<any> {
    return this.http.get(endpointFonction + 'all').pipe(
      map(this.extractData));
  }

  addFonction(fonction): Observable<any> {
    console.log(fonction);
    return this.http.post<any>(endpointFonction + 'add', JSON.stringify(fonction), httpOptions).pipe(
      tap((product) => console.log(`added metier w/ id=${fonction.id}`)),
      catchError(this.handleError<any>('addMetier'))
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
