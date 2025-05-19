import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aerolinea } from './Aerolinea';

@Injectable({
  providedIn: 'root'
})
export class AerolineaService {

private apiUrl: string = "../assets";
private data: string = "/data.json";

constructor(private http: HttpClient) { }

getAerolineas(): Observable<Aerolinea[  ]> {
  return this.http.get<Aerolinea[]>(this.apiUrl + this.data);
  }
}
