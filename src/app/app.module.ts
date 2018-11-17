import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WindowComponent } from './pages/home/window/window.component';
import { MessageBoxComponent } from './pages/home/message-box/message-box.component';
import { MessageHolderComponent } from './pages/home/message-holder/message-holder.component';
import { MessageComponent } from './pages/home/message-holder/message/message.component';
import {FormsModule} from '@angular/forms';
import { ScrollAnchorComponent } from './pages/home/message-holder/message/scroll-anchor/scroll-anchor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WindowComponent,
    MessageBoxComponent,
    MessageHolderComponent,
    MessageComponent,
    ScrollAnchorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
