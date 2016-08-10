import {Component, ViewChild, Host} from "@angular/core";
import {Content, IONIC_DIRECTIVES} from "ionic-angular";

@Component({
    selector: "hello-world",
    directives: [IONIC_DIRECTIVES],
    template: '<span>Hello World</span>'
})
export class HelloWorld {
  constructor(private content: Content) {
    console.log(this.content);
  }
}