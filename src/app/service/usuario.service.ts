import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../Models/usuarios';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl = environment.baseUrl;
 

  constructor(private httpclient: HttpClient) { }

  //Get All users
  getUsers():Observable<any[]>{
    return this.httpclient.get<any[]>(this.baseUrl+'/users');
  }
  //Get user By id
  getUsersById(id:number):Observable<Usuarios>{
    return this.httpclient.get<Usuarios>(this.baseUrl+'/users/'+id);
  }

   
  //create users
  addUsers(data:any){
    return this.httpclient.post(this.baseUrl+'/users',data);
  }
  //update user by ID
  updateUsers(id:number,data:any){
    return this.httpclient.put(this.baseUrl + `/users/${id}`,data);
  }
//Delete user by ID
  deleteusers(id:number){
    return this.httpclient.delete(this.baseUrl+`/users/${id}`);
  }
  
}
