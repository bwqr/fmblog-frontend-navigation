import {Component, OnInit} from '@angular/core';

import {CacheService, HelperService, MainComponent, MainRequestService} from '../../imports';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent extends MainComponent implements OnInit {

  user: any;

  menus: any = [
  ];

  mode = 'side';

  get isPageReady() {
    return this.menus && this.user;
  }

  constructor(
    private requestService: MainRequestService,
    private cacheService: CacheService,
    private helpersService: HelperService,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.subs.add(
      this.route.data.subscribe((data: { user: any, menus: any }) => {
        this.user = data.user;
        this.menus = data.menus;
      })
    );
  }

  setMode(mode: string) {
    this.mode = mode;
  }
}
