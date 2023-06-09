import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink,Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  forms!: FormGroup
  id!:number;
  titulo:string = 'Add Users'; 

  constructor(private fg: FormBuilder, private userservice:
    UsuarioService,
    private activeRoute: ActivatedRoute,
    private router: Router,private toastr: ToastrService){
      this.forms = this.fg.group({
        name: ['', Validators.required],
        username : ['', Validators.required],
        email:['', Validators.required],
        phone: [''],
        website:[''],
     
        
    });
  this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));

  }
  ngOnInit(){
    if(this.id != 0){
      this.titulo = 'Edit Users';
      this.getUsers(this.id);
    }
  }

  getUsers(id:number){
    this.userservice.getUsersById(id).subscribe(data=>{
    this.forms.patchValue({
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website,
       
       })
    })
    }

    AddEditUser(){
      const user: Usuarios = {
        name : this.forms.value.name,
        username : this.forms.value.username,
        email: this.forms.value.email,
        phone: this.forms.value.phone,
        website : this.forms.value.website,
        
      }
      if(this.id != 0){
        user.id = this.id,
      this.EditUser(this.id,user)
      this.toastr.success('Usario editado exitosamente!')
      //alert('usario editado exitosamente!')
      }
      else{
        this.AddUser(user);
        this.toastr.success('Usario Creado exitosamente!')
        //alert('usario creado exitosamente!')
      }
      }
      AddUser(user:Usuarios){
      this.userservice.addUsers(user).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/Usuarios']);
      }, err=> console.log(err))
      }
      
      EditUser(id:number, user: Usuarios){
        this.userservice.updateUsers(id,user).subscribe(data=>{
          console.log(data);
          this.router.navigate(['/Usuarios']);  
        }, err=> console.log(err))
      }

}
