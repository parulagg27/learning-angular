import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <h2>Welcome to {{name}}</h2>
    <input type="text" #userInput>
    <button (click)="onClick(userInput.value)">Submit</button>
  `,
  styles: []
})
export class TestComponent implements OnInit {
  name = "Codevolution";

  constructor() { }

  onClick(value){
    console.log(value);
  }

  ngOnInit(): void {
  }

}
