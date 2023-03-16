import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-creatr-room',
  templateUrl: './creatr-room.component.html',
  styleUrls: ['./creatr-room.component.css']
})
export class CreatrRoomComponent {
  constructor(private route:UserDataService){}
  namme:string='';
    ngOnInit(){
     this.namme=this.route.name;
    }
}
