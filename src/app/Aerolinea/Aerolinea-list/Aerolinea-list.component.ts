import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../Aerolinea';
import { AerolineaService } from '../Aerolinea.service';

@Component({
  selector: 'app-Aerolinea-list',
  templateUrl: './Aerolinea-list.component.html',
  styleUrls: ['./Aerolinea-list.component.css']
})
export class AerolineaListComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];

  constructor(private aerolineaService: AerolineaService) { }

  getAerolineas(): void {
    this.aerolineaService.getAerolineas().subscribe((aerolineas) => {
      this.aerolineas = aerolineas;
    });
  }

  ngOnInit() {

      this.getAerolineas();
      
  }
}
