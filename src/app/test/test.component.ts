import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'orange'">You picked orange color</div>
      <div *ngSwitchDefault>Try Again!</div>
    </div>
  `,
})
export class TestComponent implements OnInit {
  color = "orange";

  ngOnInit(): void {
  }

}
