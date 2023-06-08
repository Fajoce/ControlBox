import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from 'src/app/service/spinner-service.service';

const users: Usuarios[] = [];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id','name', 'username','email','phone','website','address','acciones'];
  dataSource = new MatTableDataSource<Usuarios>(users);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private userservice: UsuarioService,
    private toastr: ToastrService,
    private spinnerService: SpinnerService){  
    }
   
    
  getAllUsers(){
    debugger;
    this.userservice.getUsers().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    }, err => console.log(err));
  }
  ngOnInit(){
    this.spinnerService.callSpinner();
    this.getAllUsers();
    }

    deleteUsers(id:number){
      return this.userservice.deleteusers(id).subscribe(data=>{       
       this.toastr.success('Registro ' + id + ' eliminado con exito')
       this.getAllUsers();
      }, err => console.log(err))
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
}
