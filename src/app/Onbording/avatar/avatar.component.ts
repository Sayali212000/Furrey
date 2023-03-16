import { Component , OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
constructor(private user:UserDataService){}

name:string='';
ngOnInit() {
  this.name = this.user.name;
  console.log(this.name)
}

avatar=[1,2,3,4,5]
prevVal:any;

clicked(val:any){
  if(this.prevVal){
  this.prevVal.style.border='0px'
  val.style.border='3px solid black'
  this.prevVal=val;
  
  }else{
    val.style.border='3px solid black'
  this.prevVal=val;
  }
}
}
