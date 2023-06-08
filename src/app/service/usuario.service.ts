import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../Models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  readonly url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpclient: HttpClient) { }

  //Get All users
  getUsers():Observable<any[]>{
    return this.httpclient.get<any[]>(this.url+'/users');
  }
  //Get user By id
  getUsersById(id:number):Observable<Usuarios>{
    return this.httpclient.get<Usuarios>(this.url+'/users/'+id);
  }

   
  //create users
  addUsers(data:any){
    return this.httpclient.post(this.url+'/users',data);
  }
  //update user by ID
  updateUsers(id:number,data:any){
    return this.httpclient.put(this.url + `/users/${id}`,data);
  }
//Delete user by ID
  deleteusers(id:number){
    return this.httpclient.delete(this.url+`/users/${id}`);
  }
  
}
