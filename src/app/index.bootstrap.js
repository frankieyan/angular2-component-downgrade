'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

// main App module
import "./index.module";
import upgradeAdapter from "./index.upgradeAdapter"

import "../assets/styles/sass/index.scss";

angular.element(document).ready(function () {
  upgradeAdapter.bootstrap(document, ['myNgApp'], {strictDi: true});
});
