import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ScriptLoaderService } from '../../../_services/script-loader.service';

@Component({
  selector: 'app-form-advanced',
  templateUrl: './form-advanced.component.html',
})
export class FormAdvancedComponent implements OnInit, AfterViewInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this._script.load('./assets/js/scripts/form-plugins.js');
  }

}
