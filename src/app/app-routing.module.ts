import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from './Onbording/avatar/avatar.component';
import { CCodeComponent } from './Onbording/c-code/c-code.component';
import { CreatrRoomComponent } from './Onbording/creatr-room/creatr-room.component';
import { JCodeComponent } from './Onbording/j-code/j-code.component';
import { JoinRoomComponent } from './Onbording/join-room/join-room.component';
import { NameComponent } from './Onbording/name/name.component';
import { RoomComponent } from './Onbording/room/room.component';
import { StartComponent } from './Onbording/start/start.component';

const routes: Routes = [
  { path: '',component: NameComponent },
  { path: 'name', component: NameComponent },
  { path: 'avatar', component: AvatarComponent },
  { path: 'room', component: RoomComponent },
  { path: 'join', component: JoinRoomComponent },
  { path: 'create', component: CreatrRoomComponent },
  { path: 'c_code', component: CCodeComponent },
   { path: 'j_code', component: JCodeComponent },
    { path: 'start', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
