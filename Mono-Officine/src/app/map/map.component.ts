import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: any; lng: any; iconPosOmino: any;
  value: string;
  zoom: number = 15;

  constructor() {

    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = +pos.coords.latitude             //this.lat = 45.540014
        this.lng = +pos.coords.longitude            //this.lng = 9.132803
      });
    }
    this.iconPosOmino = {
      //url: './assets/images/markerOmino.png',
      scaledSize: {
        width: 75,
        height: 75
      }
    }
  }


  ngOnInit() {
    console.log('Component mapping');
  }
}
