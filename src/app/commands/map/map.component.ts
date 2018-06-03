import { Component, OnInit, ViewChild } from '@angular/core';
import { Map } from '../../models/map';
import { } from '@types/googlemaps';
import { MessageService } from '../../services/message.service';
import { UpdateScrollService } from '../../services/update-scroll.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
    private title: string = "User location";
    @ViewChild('gmap') gmapElement: any;
    private map: google.maps.Map;
    private mapData: Map = null;    
    author: string;
    id: string;

    constructor(private messageService: MessageService, private updateScrollService: UpdateScrollService) {
    }    

    ngAfterViewInit() {
      this.updateScrollService.scroll.next(true);
    }

    setData(data: any) {      
      this.mapData = data.data;
      this.author = data.author;
      this.id = data.id; 
      var mapProp = {
        center: new google.maps.LatLng(this.mapData.lat, this.mapData.lng),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
      let marker = new google.maps.Marker({        
          position: this.mapData,
          map: this.map,
          title: 'You are here'
        });     
    }

    removeMap() {
      this.messageService.removeItem(this.id);
    }
}
