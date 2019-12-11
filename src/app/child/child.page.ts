import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'child-page',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.sass']
})
// tslint:disable-next-line:component-class-suffix
export class ChildPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
