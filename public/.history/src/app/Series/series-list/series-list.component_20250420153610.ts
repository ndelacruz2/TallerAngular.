import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Serie[] = [];

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
    });
  }

  getTotalSeasons(): number {
    return this.series.reduce((total, serie) => total + serie.seasons, 0);
  }

}