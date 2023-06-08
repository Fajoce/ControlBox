import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ToastrService } from 'ngx-toastr';

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
  @Output() mensaje: EventEmitter<string>;

  constructor(private userservice: UsuarioService,
    private toadstr: ToastrService){
      this.mensaje = new EventEmitter();
    }

    emitirMensaje() {
    // Usando la variable emitimos el valor que queremos enviar
    this.mensaje.emit("The current Date is:" + Date.now);
  }
    
  getAllUsers(){
    this.userservice.getUsers().subscribe(res =>{
      console.log(res);
      this.dataSource.data = res;
    });
  }
  ngOnInit(){
    this.getAllUsers();
    }

    deleteUsers(id:number){
      return this.userservice.deleteusers(id).subscribe(data=>{       
       this.toadstr.success('Registro ' + id + ' eliminado con exito')
      this.getAllUsers();
      })
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }
}
