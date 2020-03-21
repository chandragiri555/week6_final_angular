import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
 public registerData:any;
  constructor(private service: BackendService,  private router: Router) {
    this.registerData= {
      username:null,
      password: null
    }
   }
  


  ngOnInit(): void {
  }
  onSubmit()
  {
    this.service.registerUser(this.registerData)
      .subscribe(
      res=>{console.log(res),
      err=>console.log(err)
      });
      alert("registered successfully");
  }
}
