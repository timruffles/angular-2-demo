import { Component } from 'angular2/angular2';

export { TopicPage };

import { ROUTER_DIRECTIVES } from 'angular2/router';
import { RouteParams } from 'angular2/router';

@Component({
  selector: 'topic-page',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h1>{{ topic }}</h1>
    <a [router-link]="['/Home']">Back</a>
  `,
})
class TopicPage {
  constructor(data: RouteParams) {
    this.topic = data.get("id");
  }
}


