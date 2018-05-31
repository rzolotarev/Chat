import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store'
import { IChatState, rootReducer, INIT_STATE } from './models/IChatState';
import { CommandComponent } from './commands/base-command/command.component';
import { MapComponent } from './commands/map/map.component';
import { RateComponent } from './commands/rate/rate.component';
import { UnknownComponent } from './commands/unknown/unknown.component';
import { DateComponent } from './commands/date/date.component';
import { CompleteComponent } from './commands/complete/complete.component';
import { RandomCommandComponent } from './commands/random-command/random-command.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { AuthGuard } from './authentication/auth.guard';
import { LoginComponent } from './authentication/login/login.component';

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
    RandomCommandComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgReduxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  entryComponents: [
    RateComponent,
    MapComponent,
    DateComponent,
    CompleteComponent,
    RandomCommandComponent,
    UnknownComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IChatState>){
    ngRedux.configureStore(rootReducer, INIT_STATE);
  }
}
