'use strict';

import ng2Component from './ng2Component.component';
import upgradeAdapter from '../../index.upgradeAdapter';

const ng2ComponentModule = angular.module('ng2Component-module', []);

ng2ComponentModule
  .directive('ng2Component', upgradeAdapter.downgradeNg2Component(ng2Component));

export default ng2ComponentModule;
