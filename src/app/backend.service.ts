import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
private registerurl: "http://localhost:3000/register"
private loginurl: "http://localhost:3000/login"
private editurl: "http://localhost:3000/edit"
private getdetailsurl: "http://localhost:3000/getdetails"
private getbyidurl: "http://localhost:3000/getdetails/$(id)"
  constructor(private http:HttpClient) { }
   loginUser(data){
     return this.http.post<any>(this.loginurl,data);
   }
   registerUser(data){
    return this.http.post<any>(this.registerurl,data);
  }
  editUser(data){
    return this.http.put<any>(this.editurl,data);
  }
  getdetailsUser(data){
    return this.http.get<any>(this.getdetailsurl,data);
  }
  getdetailsById(id){
    return this.http.get<any>(this.getbyidurl,id);
  }
}
