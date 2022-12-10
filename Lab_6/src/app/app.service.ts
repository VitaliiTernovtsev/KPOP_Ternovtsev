
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs'
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {

  constructor(private httpclient: HttpClient) {}

  getUsers(): Observable<any>{
    return this.httpclient.get<any>('http://jsonplaceholder.typicode.com/posts')
  }

}

export interface Home
{
    
}


