import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Serie } from './series';
import { dataSeries } from './series-data';
@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor() { }

  getSeries(): Observable<Serie[]> {
    return of(dataSeries); 
  }
}