import {Component, OnInit} from '@angular/core';

import {MainRequestService, CacheService, HelperService} from '../../imports';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {MainComponent} from '../../imports';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent extends MainComponent implements OnInit {

  user: any;

  menus: any = [
    {
      url: '/conference/video-room',
      name: 'Video Room',
      children: []
    },
    {
      url: '/conference/audio-bridge',
      name: 'Audio Bridge',
      children: []
    },
    {
      url: '/user/profile',
      name: 'User Profile',
      children: []
    }
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
      this.route.data.subscribe((data: { user: any }) => {
        this.user = data.user;
      })
    );
  }

  setMode(mode: string) {
    this.mode = mode;
  }
}
