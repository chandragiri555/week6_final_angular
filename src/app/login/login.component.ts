import { Component, OnInit } from '@angular/core';
import { BackendService} from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public logindata: any;
  
  constructor(private service:BackendService, private router: Router) {
  this.logindata={
    username:null,
    password:null
  }
  }


  ngOnInit(): void {
  }
  userLogin(){
    this.service.loginUser(this.logindata)
    .subscribe(data=>{
      console.log(data);
     if(data.success==200){
       this.router.navigate(['/getdetails']);
     }else {
         alert("wrong user");
       }
     })
    }
    
}



