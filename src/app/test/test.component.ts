import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <!--    <h1 *ngIf="toBeDisplayed; else elseBlock">Codevolution</h1>-->

    <!--    <ng-template #elseBlock>-->
    <!--      <h2>Hidden first Element</h2>-->
    <!--    </ng-template>-->
    <div *ngIf="toBeDisplayed; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>First Block</h2>
    </ng-template>
    <ng-template #elseBlock>
      <h2>Second Block</h2>
    </ng-template>

  `,
  styles: []
})
export class TestComponent implements OnInit {
  toBeDisplayed = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}
