import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from'@angular/router';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponentComponent } from './components/menu-component/menu-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { InicioComponentComponent } from './components/inicio-component/inicio-component.component';
import { RegistroComponentComponent } from './components/registro-component/registro-component.component';
import { IngresoComponentComponent } from './components/ingreso-component/ingreso-component.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const appRoutes: Routes = [
  { path: '', component: InicioComponentComponent },
  { path: 'Registro', component: RegistroComponentComponent },
  { path: 'Ingreso', component: IngresoComponentComponent }, 
  { path: 'showAllusers', component: ShowUsersComponent}, 
  { path: 'editUser/:id', component: UpdateUserComponent},
  { path: 'deleteUser/:id', component: ShowUsersComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    FooterComponentComponent,
    InicioComponentComponent,
    RegistroComponentComponent,
    IngresoComponentComponent,
    ShowUsersComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
