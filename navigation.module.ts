import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { DropdownMenuComponent } from './components/navigation/sidebar/dropdown-menu/dropdown-menu.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    SidebarComponent,
    DropdownMenuComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    CoreModule,
    SharedModule,
    NavigationComponent
  ]
})
export class NavigationModule { }
