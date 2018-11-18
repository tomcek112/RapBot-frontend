import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Message} from '../../../types/message';
import {MessageService} from '../../../services';

@Component({
  selector: 'fe-message-holder',
  templateUrl: './message-holder.component.html',
  styleUrls: ['./message-holder.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[class.fe-message-holder]": "true"
  }
})
export class MessageHolderComponent implements OnInit {

  public messages: Message[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {

    const messageListener = this.messageService.getSubscribable();

    messageListener.subscribe(m => m.map(m => this.messages.push(m)));
    //messageListener.subscribe(m => m.map(m => console.log(m)));

  }

}
