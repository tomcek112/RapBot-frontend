import { Injectable } from '@angular/core';
import {Message} from '../types/message';
import {Observable, of, pipe, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  private _baseUrl: string = "http://138.68.103.192:5000/west/api/v1.0";

  private _messages: Message[] = [];

  private _messageEmitter: ReplaySubject<Message[]> = new ReplaySubject();

  private _loading: boolean = false;

  constructor(private http: HttpClient) { }

  private _emitMessages(contents: string[], comesFromUser: boolean): void {

    console.log(contents);

    const messages: Message[] = contents.map(c => {return {"content": c, "comesFromUser": comesFromUser}});

    let baseTimeout = 0;

    //this is ugly but gets the job done
    messages.map(m => {
      setTimeout(() => {
        this._messageEmitter.next(
          [m]
        );
      }, baseTimeout);
      baseTimeout = baseTimeout + 1000;
    });
  }

  public getSubscribable(): Observable<Message[]> {
    return this._messageEmitter.asObservable();
  }

  public postMessage(message: Message): void {
    this.loading = true;
    this._emitMessages([message.content], true)
    this.http.post(this._baseUrl + "/seed", {"word": message.content.split(" ").pop()}).subscribe(
      pipe((r) => {this.loading = false; this._emitMessages(r["results"], false)})
    );
  }

  public get loading(): boolean {
    return this._loading;
  }

  public set loading(value: boolean) {
    this._loading = value;
  }

}
