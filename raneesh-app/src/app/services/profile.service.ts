import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url=`https://api.github.com/users`;
  constructor(private http:HttpClient) { 

  }
  getUser():Observable<any>{
    // get call for userinformation
    return this.http.get(this.url);
  }
  userDetails(obj:any){
    // get call for repo informaton
    return this.http.get(obj.repos_url);
  }
}
