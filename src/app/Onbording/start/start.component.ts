import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
 constructor(private route:UserDataService){}
code:any=''
 ngOnInit(){
    this.code= this.route.code;
 }
}
