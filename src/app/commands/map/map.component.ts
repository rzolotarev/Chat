import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Map } from '../../models/map';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;
    mapData: Map = null;    

    constructor() {
    }    

    ngOnInit() {               
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

    setData(data: Map) {      
      this.mapData = data;      
    }
}
