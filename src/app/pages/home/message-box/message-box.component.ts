import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../../services/message-service.service';
import {Message} from '../../../types/message';

@Component({
  selector: 'fe-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  public fieldContent: string = "";

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  public sendMessage(content: string): void {
    const message: Message = {content: content, comesFromUser: true};
    this.messageService.postMessage(message);
    this.fieldContent = "";
  }

}
