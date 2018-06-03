import { Component, OnInit, ViewChild, ViewContainerRef, 
          Input, ComponentRef, ComponentFactoryResolver, OnDestroy, SimpleChange } from '@angular/core';
import { CommandMappingService } from '../../services/command-mapping.service';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../models/message';
import { ContentItem } from '../../models/contentItem';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnDestroy {

    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;    
    private componentRef: ComponentRef<{}>;    
    
    constructor(private commandMappingService: CommandMappingService, 
                private componentFactoryResolver: ComponentFactoryResolver) { }

    @Input() contentItem: ContentItem;      

    ngOnInit() {
      if(this.contentItem)
        this.createComponent(this.contentItem);      
    }    

    createComponent(contentData: any) {     
        let componentType = this.commandMappingService.getComponentType(contentData.type);
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.componentRef = this.container.createComponent(componentFactory);
        (<any>this.componentRef.instance).setData(contentData);    
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
