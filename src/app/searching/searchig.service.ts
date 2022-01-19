import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { BaseUrl } from '../baseUrl';
import { catchError, retry,map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchigService {
  searchUrl:string ='openlibrary.org/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient,public BaseUrl:BaseUrl) { }
  getData(urlPrefix: string): Observable<any> {
    const url = this.BaseUrl.searchUrl + urlPrefix;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }
  // SearcTitle(term: string): Observable<any[]> {
  //   term=term.trim();
  //   const options = term ? { params: new HttpParams().set('title', term) } : {};
  //   return this.http.get<any[]>('http://openlibrary.org/search.json?q=search' ,options )
  // }
  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = error.error.msg;
    }
    return throwError(errorMessage);
  }
}
