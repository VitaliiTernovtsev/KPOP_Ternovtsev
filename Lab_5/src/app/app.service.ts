
import { Injectable } from "@angular/core";
import {Observable} from 'rxjs'
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {

  constructor(private httpclient: HttpClient) {}

  getUsers(): Observable<Home>{
    return this.httpclient.get<Home>('https://randomuser.me/api/?results=20')
  }

}

export interface Home
{
    results:any[];
    info:any[]; 
}


