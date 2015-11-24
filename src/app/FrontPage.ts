import { Component } from 'angular2/angular2';
import { HelloComponent } from './HelloComponent';

export { FrontPage };

@Component({
  selector: 'front-page',
  directives: [HelloComponent],
  template: '<hello-angular></hello-angular>',
})
class FrontPage {
}


