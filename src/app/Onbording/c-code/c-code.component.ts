import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-c-code',
  templateUrl: './c-code.component.html',
  styleUrls: ['./c-code.component.css']
})
export class CCodeComponent implements OnInit {
  code = Math.floor(Math.random()*899999)+100000

  constructor(private route:UserDataService){}
name:string='';
  ngOnInit(){
    this.name=this.route.name;
    this.route.addcode(this.code)
  }
}
