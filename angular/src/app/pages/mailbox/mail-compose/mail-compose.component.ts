import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
})
export class MailComposeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    $('#summernote').summernote();
    $('.note-popover').css({
        'display': 'none'
    });
    $('[data-provide="markdown"]').markdown({autofocus:false,savable:false});
  }

}
