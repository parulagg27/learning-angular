import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <!--string pipes-->
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{greetingMessage | titlecase}}</h2> <!--titlecase: makes first letter of every word capital & rest: small-->
    <h2>{{greetingMessage | slice:8}}</h2> <!--slice pipe takes atleast takes one argument (alice:start-index)-->
    <h2>{{greetingMessage | slice:8 | titlecase}}</h2> <!--can use multiple pipes)-->
    <h2>{{greetingMessage | slice:8:18 | titlecase}}</h2>
    <h2>{{jsonContent | json}}</h2> <!--HTML doesn't render JSON contents: rather show it as [object Object]. To display json content: use this pipe-->

    <!--number pipes-->
    <p>{{5.25 | number:'1.2-4'}}</p> <!--putting number argument as string is important, but argument not important-->
    <p>{{5.25 | number:'2.1-1'}}</p> <!--round of for digits happen-->
    <p>{{5.25 | number:'1.0-0'}}</p> <!--only 5-->
    <p>{{5.25 | number:'1.0'}}</p> <!--won't work => having decimal imp. with upper & lower limit-->
    <p>{{5.25 | number: '0.3-4'}}</p> <!--won't work. 5.25 rendered as it is-->
    <p>{{5.25 | number:'3.2-4' | number:'2.2-5'}}</p> <!--can use multiple number pipes-->

    <p>{{5.25 | percent}}</p>

    <p>{{5.25 | currency}}</p>  <!--default currency: USD-->
    <p>{{5.25 | currency:'EUR'}}</p> <!--in currency pipe, can specify currency by passing its ISO Code as optional argument => currency symbol rendered-->
    <p>{{5.25 | currency:'EUR':'code'}}</p> <!--can pass another argument 'code' to currency to render currency code instead of symbol-->

    <!--date Pipes-->
    <p>{{date}}</p>
    <p>{{date | date:'short'}}</p>
    <p>{{date | date:'shortDate'}}</p>
    <p>{{date | date:'shortTime'}}</p>
    <p>{{date | date:'medium'}}</p>
    <p>{{date | date:'mediumDate'}}</p>

  `,
})
export class TestComponent implements OnInit {
  name: string = "Parul";
  greetingMessage: string = "Welcome to angular bAsicS tutorial";

  jsonContent: object = {
    "name": "Parul",
    "role": "Application Developer"
  }
  date: Date = new Date();

  ngOnInit(): void {
  }


}

