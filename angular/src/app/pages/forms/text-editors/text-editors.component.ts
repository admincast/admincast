import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-text-editors',
  templateUrl: './text-editors.component.html',
})
export class TextEditorsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    $('#summernote').summernote();
    $('#summernote_air').summernote({
        airMode: true
    });
    $('[data-provide="markdown"]').markdown({autofocus:false,savable:false});
  }

}
