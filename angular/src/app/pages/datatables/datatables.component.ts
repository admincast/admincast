import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-datatables',
  templateUrl: './datatables.component.html',
})
export class DatatablesComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    $('#example-table').DataTable({
        pageLength: 10,
    });
  }

}
