import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-input-masks',
  templateUrl: './input-masks.component.html',
})
export class InputMasksComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    $('#ex-date').mask('99/99/9999', {
        placeholder: 'dd/mm/yyyy'
    });
    $('#ex-phone').mask('(999) 999-9999');
    $('#ex-phone2').mask('+186 999 999-9999');
    $('#ex-ext').mask('(999) 999-9999? x9999');
    $('#ex-credit').mask('****-****-****-****', {
        placeholder: '*'
    });
    $('#ex-tax').mask('99-9999999');
    $('#ex-currency').mask('$ 99.99');
    $('#ex-product').mask('a*-999-a999', {
        placeholder: 'a*-999-a999'
    });

    $.mask.definitions['~'] = '[+-]';
    $('#ex-eye').mask('~9.99 ~9.99 999');
  }

}
