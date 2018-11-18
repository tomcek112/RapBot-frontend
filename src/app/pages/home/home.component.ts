import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public chatEntered: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public enterChat(): void {
    this.chatEntered = true;
  }


}
