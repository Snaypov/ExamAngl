import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private chat: HttpClient, private socket: Socket) {
  }
  public sendMessage(msg: string): void {
    this.socket.emit('message', msg);
  }
  public joinRoom(username: any, room: any): void{
    this.socket.emit('joinRoom', { username, room })
  }
  public getRoomUsers(room: any, users: any): void{
    this.socket.on('roomUsers', ({room, users})=>{

    });
  }
}
