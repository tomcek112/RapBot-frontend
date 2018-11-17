import {AfterContentInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ScrollAnchorComponent} from './scroll-anchor/scroll-anchor.component';

@Component({
  selector: 'fe-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements AfterContentInit {

  @ViewChild(".fe-message") message: ElementRef;

  constructor() { }

  ngAfterContentInit() {
    console.log(this.message);
    //this.message.nativeElement.scrollIntoView();

  }

}
