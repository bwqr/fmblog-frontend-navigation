import { Component, OnInit, Input } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user;

  themes: Array<any> = [
    { value: 'dark-reddish', fill: '#b71c1c', stroke: 'black' },
    { value: 'light-reddish', fill: '#b71c1c', stroke: 'white' },
    { value: 'dark-bluish', fill: '#0d47a1', stroke: 'black' },
    { value: 'light-bluish', fill: '#0d47a1', stroke: 'white' }
  ];

  defaultTheme = 'dark-reddish';

  theme: string;

  constructor(
    private overlayContainer: OverlayContainer
  ) {
    // this.setTheme(localStorage.getItem('theme'));
  }

  ngOnInit() { }

  setTheme(theme: string) {
    const index = this.themes.findIndex(_theme => _theme.value === theme);

    this.theme = index !== -1 ? theme : this.defaultTheme;

    localStorage.setItem('theme', this.theme);

    const element = document.getElementById('app');
    element.classList.remove(...Array.from(element.classList));
    element.classList.add(this.theme);
    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.theme);
  }
}
