import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import {RouterModule, Routes} from "@angular/router";
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";

const config: SocketIoConfig = { url: 'http://localhost:3000/', options: {} };
const routes: Routes = [
  {
      path: 'chat',
    loadChildren: ()=>import('./chat/chat.module').then(m=>ChatComponent)
  },
  {
    path: 'login',
    loadChildren: ()=>import('./login/login.module').then(m=>LoginComponent)
  },
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
