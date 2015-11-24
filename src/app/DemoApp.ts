import { Component } from 'angular2/angular2';
import {ROUTER_DIRECTIVES, RouteConfig, Router } from 'angular2/router';

import { FrontPage } from "./FrontPage";
import { TopicPage } from "./TopicPage";

@RouteConfig([
 { 
   path: '/', 
   as: 'Home', 
   component: FrontPage
 },
 { 
   path: '/topic/:id', 
   as: 'Topic', 
   component: TopicPage,
 },
])
@Component({
  selector: "app",
  template: "<router-outlet></router-outlet>",
  directives: [ROUTER_DIRECTIVES],
})
class DemoApp {
}

export { DemoApp }
