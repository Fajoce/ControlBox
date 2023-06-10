import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxPrintModule } from 'ngx-print';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { ToastrModule, ToastContainerDirective } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule} from '@angular/material/progress-bar'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { AdduserComponent } from './Components/adduser/adduser.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { DetalleUsuariosComponent } from './Components/detalle-usuarios/detalle-usuarios.component';
import { InterceptorService } from './service/interceptor.service';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';


//Routes
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'getUsuario/:id', component: DetalleUsuariosComponent },
  { path: 'Usuarios', component: UsuariosComponent },
  { path: 'AddUsers', component: AdduserComponent },
  { path: 'editUser/:id', component: AdduserComponent },
  { path: 'Home', component: HomeComponent },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AdduserComponent,
    UsuariosComponent,
    DetalleUsuariosComponent,
    NavComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPrintModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  exports:[],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent]
})
export class AppModule { }
