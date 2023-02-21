import { Component, ViewChildren, QueryList } from '@angular/core';
import { SubComponent } from './sub.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomCount: Array<number> = [1, 2, 3, 4, 4];
  // numbers: Array<number> = [1, 2, 3, 4, 4];

  @ViewChildren('divs') components: QueryList<any>;

  constructor() {}

  ngAfterViewInit() {
    this.components.forEach((div) => {
      div.content.nativeElement.style.display = 'flex';
      div.content.nativeElement.insertAdjacentHTML(
        'afterbegin',
        '<div class="two">two ___</div>'
      );
      // console.log(div.content.nativeElement);
    });
  }
}
