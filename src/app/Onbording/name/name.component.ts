import { Component,OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor(public user:UserDataService){

  }
con:string ='display:none'
log:string ='display:none'
  ngOnInit() {

  setTimeout(()=>{
      this.con='display:none'
      this.log='display:block'
      
      setTimeout(()=>{
        this.con='display:block'
        this.log='display:none'
      },3000)


    },1000)
    
  }

 submit(value:any){

  if(value){
    this.user.addname(value)
  
  }
}

}
