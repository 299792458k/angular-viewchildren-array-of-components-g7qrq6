import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'sub',
  template: `<div #content>Sub Component {{number}}</div>`,
})
export class SubComponent {
  @Input('index') currIndex: number;
  @ViewChild('content') content: any;
}
