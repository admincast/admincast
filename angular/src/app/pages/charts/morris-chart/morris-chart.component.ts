import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

@Component({
  selector: 'app-morris-chart',
  templateUrl: './morris-chart.component.html',
})
export class MorrisChartComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/charts_morris_demo.js');
  }

}
