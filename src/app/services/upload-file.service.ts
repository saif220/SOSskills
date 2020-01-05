import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
const endpoint = 'http://localhost:8081/';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, nom: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('nom', nom);
    const req = new HttpRequest('POST', 'http://localhost:8081/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);

  }

  getFiles(): Observable<any> {
    return this.http.get('/getallfiles');
  }

}
