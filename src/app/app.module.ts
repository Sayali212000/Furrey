import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './Onbording/name/name.component';
import { AvatarComponent } from './Onbording/avatar/avatar.component';
import { RoomComponent } from './Onbording/room/room.component';
import { JoinRoomComponent } from './Onbording/join-room/join-room.component';
import { CreatrRoomComponent } from './Onbording/creatr-room/creatr-room.component';
import { FormsModule } from '@angular/forms';
import { CCodeComponent} from './Onbording/c-code/c-code.component'
import { JCodeComponent} from './Onbording/j-code/j-code.component'
import { StartComponent } from './Onbording/start/start.component'

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    AvatarComponent,
    RoomComponent,
    JoinRoomComponent,
    CreatrRoomComponent,
    CCodeComponent,
    JCodeComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
