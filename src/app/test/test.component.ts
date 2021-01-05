import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{"Welcome, " + username}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
})
export class TestComponent implements OnInit {
  @Input('name') username: string;
  @Output() childEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("Welcome to Codevolution!");
  }

}

