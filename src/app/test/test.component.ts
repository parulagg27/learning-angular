import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <h2 [style.color]="'orange'"> Style Binding</h2>
    <h2 [style.color]="highlightColor"> Style Binding 2</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 3</h2>
    <h2 [ngStyle]="multiCSS">Style Binding 3</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  highlightColor = "green";
  hasError = true;

  multiCSS = {
    "color": "purple",
    "font-style": "italic"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
