import {Component, OnInit} from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
    <div *ngFor="let colour of colors; index as i; first as f; last as l, even as e, odd as o">
      <p>
        {{i}}. {{colour}}, First: {{f}}, Last: {{l}},
        Even: {{e}},
        Odd: {{o}}
      </p>
    </div>
  `,
})
export class TestComponent implements OnInit {
  colors: string[] = ["red", "orange", "blue"];

  ngOnInit(): void {
  }

}
