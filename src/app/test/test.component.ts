import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{"Welcome, " + username}}</h2>
  `,
})
export class TestComponent implements OnInit {
  @Input('name') username: string;

  ngOnInit(): void {
  }

}

