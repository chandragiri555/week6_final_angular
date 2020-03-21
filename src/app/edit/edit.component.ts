import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import {Router,ParamMap,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
public id: number;
  editdata=[];


  constructor(private editservice:BackendService,private activatedRoute:ActivatedRoute ,private route: Router) {
    this.editdata={
      username: null,
      email: null,
      age: null

    }
  }


  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap)=>{
      this.id= parseInt(params.get('id'));
      console.log(this.id);
    });
    this.editservice.getdetailsById(this.id).subscribe(data=>{
      this.editdata={
        username:null,
        email: null,s
        age:null
      }
    })
  }
edit()
{
  this.editservice.editUser(this.editdata)
  .subscribe(data=>{
    console.log(data);
  });
alert("data updated");
this.route.navigate(['/getdetails']);
}
}
