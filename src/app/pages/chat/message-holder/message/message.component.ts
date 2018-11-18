import {AfterContentInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {Message} from '../../../../types/message';

@Component({
  selector: 'fe-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[class.fe-message__user-message]": "message.comesFromUser",
    "[class.fe-message__bot-message]": "!message.comesFromUser",
    "[class.fe-message__annotated]": "last"
  }
})
export class MessageComponent implements AfterContentInit {

  @ViewChild("anchor") anchor: ElementRef;

  @Input() message: Message;

  @Input() last: boolean;

  constructor() { }

  ngAfterContentInit() {
    this.anchor.nativeElement.scrollIntoView();

  }

}
