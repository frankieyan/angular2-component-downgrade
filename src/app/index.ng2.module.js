"use strict";

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import Ng2Component from "./components/ng2Component/ng2Component.component";

export default class Angular2Module {}
Angular2Module.annotations = [
  new NgModule({
    imports: [BrowserModule],
    declarations: [
      Ng2Component
    ]
  })
]
