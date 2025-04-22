import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';
import { dataSeries } from '../series-data';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  constructor() { }
  getSeriesList(): Array<Serie> {
    return dataSeries;

  }

  ngOnInit() {
    this.series = this.getSeriesList();
  }

}
