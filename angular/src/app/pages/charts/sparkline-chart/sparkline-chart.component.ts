import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

@Component({
  selector: 'app-sparkline-chart',
  templateUrl: './sparkline-chart.component.html',
})
export class SparklineChartComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/sparkline-demo.js');
  }

}
