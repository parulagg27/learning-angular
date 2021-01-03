import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <h2>Welcome to {{name}}</h2>

    <button (click)="onClick()">Event Binding with Event Handler</button>

    <button (click)="greeting='Welcome Parul'">Greet User on Page</button>
    {{greeting}}

  `,
  styles: []
})
export class TestComponent implements OnInit {
  name = "Codevolution";
  greeting = "";

  constructor() { }

  onClick(){
    console.log("Welcome to Angular Tutorial")
  }

  ngOnInit(): void {
  }

}
