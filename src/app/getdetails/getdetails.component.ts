import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit {

  details=[];
  constructor(private detailService : BackendService, private router: Router) { }

  ngOnInit(): void {
  }
  editDetails(id){
    this.router.navigate(['/edit',id]);
  }
  deleteDetails(id){
    this.detailService.getdetailsUser(id)
    .subscribe(
      data=>{console.log(data);
    });
  }
}