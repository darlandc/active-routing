import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'about-page',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
// tslint:disable-next-line:component-class-suffix
export class AboutPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    // console.log(this.activatedRoute.routeConfig.path);

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(event => console.log(event, 'last event caught!'));

  }

}
