import { Component, OnInit, ViewChild, ViewContainerRef, 
          Input, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { CommandMappingService } from '../../services/command-mapping.service';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../models/message';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit, OnDestroy {

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;    
    private componentRef: ComponentRef<{}>;
    @select() currentMessage: Observable<Message>;
    
    constructor(private commandMappingService: CommandMappingService, 
                private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {      
      this.currentMessage.subscribe((newMessage) => {
        this.destroyCreatedComponent();
        if(newMessage)  
          this.createComponent(newMessage.type, newMessage.data);
      });
    }      
    
    createComponent(type: string, commandData: any) {     
        let componentType = this.commandMappingService.getComponentType(type);
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.componentRef = this.container.createComponent(componentFactory);
        (<any>this.componentRef.instance).setData(commandData);    
    }

    destroyCreatedComponent(){
      if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
      }
    }

    ngOnDestroy() {
      this.destroyCreatedComponent();  
    }
}
