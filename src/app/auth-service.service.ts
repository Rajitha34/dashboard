import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { CreateShopRequest } from './dashboard/dashboard.component';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor(private http:HttpClient) {}
  

  login(data: any):Observable<any>{
    
    return this.http.post(`${baseUrl}users/login`,data);
   
  }
  register(data: any):Observable<CreateShopRequest>{
    const authHeader = {
      'Authorization' : 'Bearer ' + localStorage.getItem('token')

    }
    const requestOptions = {
      headers: new HttpHeaders(authHeader),
    };
    console.log(JSON.stringify(data))
    return this.http.post(`${baseUrl}shop/`,data, requestOptions)
    
    
  }
  // :Observable<any>
  sub(bodydata:any):Observable<any>{
    console.log("data",bodydata)
    const authHeader = {
      'Authorization' : 'Bearer ' + localStorage.getItem('token')

    }
    const requestOptions = {
     headers: new HttpHeaders(authHeader)
   };
   console.log(authHeader)
    return this.http.post(`${baseUrl}shop/get-shop` ,bodydata, requestOptions);
  }

}



