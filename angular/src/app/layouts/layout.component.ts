import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {Helpers} from "../helpers";

@Component({
  selector: '.page-wrapper',
  templateUrl: './layout.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class LayoutComponent implements AfterViewInit {

	constructor() { }

  ngAfterViewInit() {

    // initialize layout: handlers, menu ...
    Helpers.initLayout();

  }

}
