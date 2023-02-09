import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
  <div style="display: flex; height: calc(100% - 42px);">
    <app-left-menu></app-left-menu>
    <app-breadcrumbs></app-breadcrumbs>
  </div>
  <div class="content" style="position: absolute; overflow: hidden; left: 56px; top: 66px; right: 6px; bottom: 6px; padding: 6px; box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23); border-radius: 3px;">
    <router-outlet></router-outlet>
  </div>
  `
  
})
export class AppComponent {
  title = 'organizational-chart';
}
