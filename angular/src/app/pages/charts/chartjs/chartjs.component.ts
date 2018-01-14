import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
})
export class ChartjsComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/chartjs_demo.js');
  }

}
