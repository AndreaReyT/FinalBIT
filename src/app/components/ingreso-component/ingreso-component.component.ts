import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User} from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ingreso-component',
  templateUrl: './ingreso-component.component.html',
  styleUrls: ['./ingreso-component.component.css']
})
export class IngresoComponentComponent implements OnInit {
  public user: User;
  public path;

  constructor(
    private service: UserService,
    private routeParamas: ActivatedRoute,
    private router: Router,
  ) { 
    this.user = new User(); 
  }

  ngOnInit(): void {
    
  }

  login(){
    this.service.login(this.user).subscribe( (res:any) => {
      switch (res.statusCode){
        case 204: 
        alert('Los datos no coinciden'); 
        break;
        case 200: 
        alert('Bienvenido');
        this.service.userLogged = true;
        localStorage.setItem('userLogged', 'true');
        break;
        case 400:
        alert('El usuario no existe');
        break;
        default:
        alert('Ocurrio un error');
      }
    } )

  }

}
