import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtafserviceService {


  constructor(private http: HttpClient) { }

  getData(endpoint : string) : Observable<any>{
    return this.http.get<any[]>(endpoint);
  }

}
