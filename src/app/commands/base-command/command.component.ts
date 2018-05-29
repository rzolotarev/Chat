import { Component, OnInit, ViewChild, ViewContainerRef, 
          Input, ComponentRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { CommandMappingService } from '../../services/command-mapping.service';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit, OnDestroy {

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;    
    private componentRef: ComponentRef<{}>;

    constructor(private commandMappingService: CommandMappingService, 
                private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
      if (this.type) {
          let componentType = this.commandMappingService.getComponentType(this.type);
          let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
          this.componentRef = this.container.createComponent(componentFactory);
          (<any>this.componentRef.instance).setData(this.commandData);
      }
    }      
  
    @Input() type: string;
    @Input() commandData: any;
    
    ngOnDestroy() {
      if (this.componentRef) {
          this.componentRef.destroy();
          this.componentRef = null;
      }
    }
}
