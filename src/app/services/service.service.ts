import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  private apiUrl='http://localhost:8080/person';
  
  constructor(private http:HttpClient ) {}
  
  getAllUsers(){
    return this.http.get(`${this.apiUrl}/finalAll`)
  }
  //  private apidelete="http://localhost:8080//delete/{id}";
  delete(id:any){
    return this.http.delete(`${this.apiUrl}/delete/`+id);
  }
  add(user:User){
    return this.http.post(`${this.apiUrl}/add`,user);
  }
  getperson(id: any) {
    return this.http.get(`${this.apiUrl}/getone/`+id);
  }
  edit(id:any,user:User){
    return this.http.put(`${this.apiUrl}/update/`+id,user);
  }
 
}
