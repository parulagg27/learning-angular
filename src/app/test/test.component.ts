import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <h2>Welcome to {{name}}</h2>
    <input type="text" [(ngModel)]="inputValue">
    {{inputValue}}
  `,
  styles: []
})
export class TestComponent implements OnInit {
  name = 'Codevolution';
  inputValue = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
