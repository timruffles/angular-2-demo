import { Component } from 'angular2/angular2';

export { HelloComponent };

@Component({
  selector: 'hello-angular',
  template: '<h1>{{ message }}</h1>',
})
class HelloComponent {
  message: string;

  constructor() { 
    this.message = "Hi there";
  }
}


