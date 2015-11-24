import { DemoApp } from "./DemoApp";
import { bootstrap, provide } from "angular2/angular2";
import { Greeter } from './Greeter';

import { APP_BASE_HREF, ROUTER_PROVIDERS, Location, LocationStrategy, PathLocationStrategy} from 'angular2/router';


bootstrap(DemoApp, [
  Greeter
  , ROUTER_PROVIDERS
  , Location
  , provide(LocationStrategy, {useClass: PathLocationStrategy})
  , provide(APP_BASE_HREF, { useValue: "/src" })
]);
