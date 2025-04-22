import { Component, OnInit } from '@angular/core';
import { Serie } from '../series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  series: Array<Serie> = [];
  constructor() { }

  ngOnInit() {
  }

}
