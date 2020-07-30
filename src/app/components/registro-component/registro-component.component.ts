import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UserService} from '../../service/user.service'


@Component({
  selector: 'app-registro-component',
  templateUrl: './registro-component.component.html',
  styleUrls: ['./registro-component.component.css']
})
export class RegistroComponentComponent implements OnInit {

  public user: User; 

  constructor(
    private service: UserService,
  ) { 
    this.user = new User();
  }

  ngOnInit(): void {
  }

  Registro(){
    console.log(this.user)
    this.service.registerUser(this.user).subscribe( (res: any) => {
      if(res.statusCode == 200){
        alert(res.message);
      }else{
        alert("Error al insertar el usuario");
      }
    } )
  }

}
