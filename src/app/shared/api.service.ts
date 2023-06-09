import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseurl = "http://localhost:8081/";

  getheader():any{
    let auth_token = localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + auth_token
    })
    return headers;
  }

  get(api:string){
    return this.http.get(this.baseurl + api, {headers:this.getheader()})
  };

  post(api:string, data:any){
    return this.http.post(this.baseurl + api, data, {headers:this.getheader()})
  };

  put(api:string, data:any){
    return this.http.put(this.baseurl + api, data, {headers:this.getheader()})
  };

  delete(api:string){
    return this.http.delete(this.baseurl + api, {headers:this.getheader()})
  };


}
