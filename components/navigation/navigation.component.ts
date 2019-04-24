import { Component, OnInit } from '@angular/core';

import { MainRequestService, CacheService, HelpersService } from '../../imports';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

    user: any;

    menus: any = [];

    mode = 'side';

    get isPageReady() {
        return this.menus && this.user;
    }

    constructor(
        private mainRequestService: MainRequestService,
        private cacheService: CacheService,
        private helpersService: HelpersService
    ) { }

    ngOnInit() {

        this.cacheService.get('menus', this.mainRequestService.makeGetRequest('user.menus', this.helpersService.getLocale()))
            .subscribe(response => this.menus = response);

        this.cacheService.get('user', this.mainRequestService.makeGetRequest('user.info'))
            .subscribe(response => this.user = response);
    }

    setMode(mode: string) {
        this.mode = mode;
    }
}
