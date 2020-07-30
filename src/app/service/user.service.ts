import {Injectable} from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService{
    apiURL = 'http://localhost:3000/api'; 
    opt = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }; 
    userLogged: Boolean; 
    constructor(
        private http: HttpClient
    ){}

    registerUser(userParams){
        console.log("Este es User Params", userParams)
        const params = JSON.stringify(userParams);  
        return this.http.post(
            this.apiURL,
            params,
            this.opt
        ).pipe( res => res ); 
    }

    getAllUsers(){
        return this.http.get(
            this.apiURL + '/allUser', 
            this.opt
        )
    }

    updateUser(userParams){
        const params = JSON.stringify(userParams);
        return this.http.put(
            `${this.apiURL}/${userParams._id}`,
            params,
            this.opt 
        )
    }

    getUser(userId){
        return this.http.get(
            `${this.apiURL}/getUser/${userId}`,
            this.opt
        )

    }

    removeUser(userId){
        return this.http.delete(
            `${this.apiURL}/${userId}`,
            this.opt
        )

    }

    login(userParams){
        const params = JSON.stringify(userParams);
        return this.http.post(
            `${this.apiURL}/login`,
            params,
            this.opt
        )
    }
    
}