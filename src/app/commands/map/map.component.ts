import { Component, OnInit, ViewChild } from '@angular/core';
import { Map } from '../../models/map';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    private title: string = "User location";
    @ViewChild('gmap') gmapElement: any;
    private map: google.maps.Map;
    private mapData: Map = null;    

    constructor() {
    }    

    ngOnInit() {               
      
    }

    setData(data: Map) {      
      this.mapData = data; 
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
}
