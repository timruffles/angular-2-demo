import { Component } from 'angular2/angular2';
import { HelloComponent } from './HelloComponent';

export { FrontPage };

import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
  selector: 'front-page',
  directives: [HelloComponent, ROUTER_DIRECTIVES],
  template: `
    <hello-angular></hello-angular>
    <a [router-link]="['/Topic', { id: 'Routing' }]">Complex routing</a>
    <a [router-link]="['/Topic', { id: 'Components' }]">Nicer components</a>
    <a [router-link]="['/Topic', { id: 'DI' }]">More powerful DI</a>
  `,
})
class FrontPage {
}


