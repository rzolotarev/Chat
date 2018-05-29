import { Injectable } from '@angular/core';
import { MapComponent } from '../commands/map/map.component';
import { RateComponent } from '../commands/rate/rate.component';
import { UnknownComponent } from '../commands/unknown/unknown.component';
import { DateComponent } from '../commands/date/date.component';
import { CompleteComponent } from '../commands/complete/complete.component';
import { RandomCommandComponent } from '../commands/random-command/random-command.component';

@Injectable({
  providedIn: 'root'
})
export class CommandMappingService {
  mappings: any;
  
    constructor() {
      this.mappings = {
        'map': MapComponent,
        'rate': RateComponent,
        'date': DateComponent,
        'complete': CompleteComponent,
        'sendRandomCommand': RandomCommandComponent         
      } 
    }

    getComponentType(typeName: string) {
      let type = this.mappings[typeName];
      return type || UnknownComponent;
  }
}
