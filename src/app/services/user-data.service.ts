import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() {

   }

   name:string='';
   code:any;
   addname(name:string){
    this.name=name;
   }
  addcode(code:any){
    this.code=code;
  }
  
}
