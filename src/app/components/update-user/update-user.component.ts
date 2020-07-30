import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user'; 
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public user: User; 
  public idUser;
  constructor(
    private service: UserService,
    private routeParams: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.idUser = this.routeParams.snapshot.paramMap.get('id');
    this.getDataUser();

  }

  updateUser(){
    this.service.updateUser(this.user).subscribe( (res: any) => {
      if (res.statusCode == 200){
        alert(res.message);
        this.router.navigate(['/showAllusers']);
      }else{
        alert(res.message)
      }
     })
  }

  getDataUser(){
    this.service.getUser(this.idUser).subscribe( (res: any) => {
      console.log('respuesta', res.allUser);
      this.user = res.allUser
    })
  }

}
