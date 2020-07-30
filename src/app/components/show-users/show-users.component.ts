import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service'; 
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  public allUser: [];
  public id; 
  public path; 

  constructor(
    private service: UserService,
    private routeParams: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('userLogged') == "true" ){
      this.path = this.routeParams.snapshot.url[0].path;
      if (this.path == 'deleteUser'){
        this.id = this.routeParams.snapshot.paramMap.get('id');
        this.removeUser();
      }else{
        this.showAllUsers();
      }
    }else{
      this.router.navigate(['/login']);
    }
  }

  showAllUsers(){
    console.log("llegó a la función")
    this.service.getAllUsers().subscribe( (res: any) => { 
      console.log("Este es res", res.statusCode)
      if (res.statusCode == 200){
        this.allUser = res.dataUser
      }else{

      }
      console.log(res.allUsers);
    })
  }

  removeUser(){
    this.service.removeUser(this.id).subscribe((res: any) => {
      if (res.statusCode == 200){
        alert(res.message);
        this.router.navigate(['/showAllusers']);
      }else{
        alert(res.message);
      }
    }) 
  }
}
