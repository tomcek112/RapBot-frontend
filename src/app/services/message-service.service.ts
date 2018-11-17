import { Injectable } from '@angular/core';
import {Message} from '../types/message';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private _messages: Message[] = [];

  private _messageEmitter: ReplaySubject<Message[]> = new ReplaySubject();

  constructor() { }

  private _emitMessages(): void {
    return this._messageEmitter.next(
      this._messages
    );
  }

  public getSubscribable(): Observable<Message[]> {
    return this._messageEmitter.asObservable();
  }

  public postMessage(message: Message): void {
    this._messages.push(message);
    this._emitMessages();
  }

}
