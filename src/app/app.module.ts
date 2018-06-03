import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'ngx-bootstrap/rating';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { IChatState, rootReducer, INIT_STATE } from './store/chatState';
import { CommandComponent } from './commands/base-command/command.component';
import { MapComponent } from './commands/map/map.component';
import { RateComponent } from './commands/rate/rate.component';
import { UnknownComponent } from './commands/unknown/unknown.component';
import { DateComponent } from './commands/date/date.component';
import { CompleteComponent } from './commands/complete/complete.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './commands/message/message.component';
import { ResponseToCommandComponent } from './commands/response-to-command/response-to-command.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    CommandComponent,
    MapComponent,
    RateComponent,
    UnknownComponent,
    DateComponent,
    CompleteComponent,    
    LoginComponent,
    HeaderComponent,
    MessageComponent,
    ResponseToCommandComponent
  ],
  imports: [
    RatingModule.forRoot(),
    BrowserModule, FormsModule, NgReduxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  entryComponents: [
    RateComponent,
    MapComponent,
    DateComponent,
    CompleteComponent, 
    MessageComponent,
    ResponseToCommandComponent,   
    UnknownComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IChatState>){
    ngRedux.configureStore(rootReducer, INIT_STATE);
  }
}
