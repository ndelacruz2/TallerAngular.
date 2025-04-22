import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void 
  {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedio = this.getPromedio();

    });
  }

  getPromedio(): number 
  {
    let sum = 0;
    this.series.forEach((serie) => {
      sum += serie.seasons;
    }
    );
    return this.promedio;
  }

  selectedSerie: Serie | null = null;

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }


  ngOnInit() {
    this.getSeries();
  }



}