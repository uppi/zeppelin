/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import 'angular-ui-grid/ui-grid.css';
import 'angular-ui-grid';

const requiredModules = [
  'ngRoute',
  'ngDragDrop',
  'ngToast',
  'ngResource',
  'infinite-scroll',
  'ui.grid',
  'ui.grid.exporter',
  'ui.grid.edit', 'ui.grid.rowEdit',
  'ui.grid.selection',
  'ui.grid.cellNav', 'ui.grid.pinning',
  'ui.grid.grouping',
  'ui.grid.emptyBaseLayer',
  'ui.grid.resizeColumns',
  'ui.grid.moveColumns',
  'ui.grid.pagination',
  'ui.grid.saveState',
];

angular.module('zeppelinWebApp', requiredModules);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['zeppelinWebApp']);
});
