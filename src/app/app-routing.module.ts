import { Routes } from "@angular/router";
import { AuthGuard } from "./authentication/auth.guard";
import { LoginComponent } from "./authentication/login/login.component";
import { MessagesComponent } from "./messages/messages.component";

export const appRoutes: Routes = [    
    { path: '',
      component: MessagesComponent,
      canActivate: [AuthGuard],
    },
    { path: 'login',
      component: LoginComponent      
    },
    { path: '**', redirectTo: '' }
  ];