import { Component } from 'angular2/angular2';
import { Greeter } from './Greeter';

export { HelloComponent };

@Component({
  selector: 'hello-angular',
  providers: [Greeter],
  template: '<h1>{{ message }}</h1>',
})
class HelloComponent {
  constructor(greeter: Greeter) { 
    this.message = greeter.message("js-monthly");
  }
}

