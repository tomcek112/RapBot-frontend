import { Injectable } from '@angular/core';
import {Message} from '../types/message';
import {Observable, pipe, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private _baseUrl: string = "http://138.68.103.192:5000/west/api/v1.0";

  private _messages: Message[] = [];

  private _messageEmitter: ReplaySubject<Message[]> = new ReplaySubject();

  constructor(private http: HttpClient) { }

  private _emitMessages(contents: string[], comesFromUser: boolean): void {

    console.log(contents);

    const messages: Message[] = contents.map(c => {return {"content": c, "comesFromUser": comesFromUser}});

    let baseTimeout = 600;

    //this is ugly but gets the job done
    messages.map(m => {
      setTimeout(() => {
        this._messageEmitter.next(
          [m]
        );
      }, baseTimeout);
      baseTimeout = baseTimeout + 600;
    });
  }

  public getSubscribable(): Observable<Message[]> {
    return this._messageEmitter.asObservable();
  }

  public postMessage(message: Message): void {
    this._emitMessages([message.content], true)
    this.http.post(this._baseUrl + "/seed", {"word": message.content}).subscribe(
      pipe((r) => this._emitMessages(r["results"], false))
    );
  }

}
