import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { ionicBootstrap, Content  } from 'ionic-angular';
import { HelloWorld } from './hello-world';

@Component({
  template: `<ion-content>
      <hello-world></hello-world>
    </ion-content> `,
  encapsulation: ViewEncapsulation.None,
  directives: [HelloWorld]
})
class DemoApp {
} 


ionicBootstrap(DemoApp);