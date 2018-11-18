import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './pages/chat/chat.component';
import { WindowComponent } from './pages/chat/window/window.component';
import { MessageBoxComponent } from './pages/chat/message-box/message-box.component';
import { MessageHolderComponent } from './pages/chat/message-holder/message-holder.component';
import { MessageComponent } from './pages/chat/message-holder/message/message.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    WindowComponent,
    MessageBoxComponent,
    MessageHolderComponent,
    MessageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
