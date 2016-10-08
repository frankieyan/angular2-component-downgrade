import {Component} from "@angular/core";

export default class Ng2Component {
  constructor() {
    this.message = "Hello from NG2";
  }
}

Ng2Component.annotations = [
  new Component({
    selector: "ng2-component",
    template: `<p>{{message}}</p>`
  })
]
