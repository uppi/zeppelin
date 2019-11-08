/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

angular.module('zeppelinWebApp').service('websocketMsgSrv', function() {
});
angular.module('zeppelinWebApp').service('ngToast', function() {
});
angular.module('zeppelinWebApp').service('baseUrlSrv', function() {
});
angular.module('zeppelinWebApp').service('heliumService', function() {
  this.getVisualizationCachedPackages = () => {
    return [];
  };
  this.getVisualizationCachedPackageOrder = () => {
    return [];
  };
  this.getSpellByMagic = () => {
  };
});
angular.module('zeppelinWebApp').controller('EmptyCtrl', EmptyCtrl);

function EmptyCtrl($scope, $rootScope, $window) {
  'ngInject';

  $scope.looknfeel = 'default';
  $scope.paragraph = {id: 1};
  $scope.revisionView = true;

  $scope.addEvent = () => {
  };

  let sampleConfig = {'graph': {'mode': 'scatterChart', 'height': 300, 'optionOpen': false, 'rotate': {}}};
  window.addEventListener(
    'message',
    function(msg) {
      if (msg.data.newData !== undefined) {
        console.log($scope.config);
        $rootScope.$broadcast(
          'updateResult',
          {
            type: 'TABLE',
            data: msg.data.newData,
          },
          $scope.config || sampleConfig,
          {
            settings: {params: {}, forms: {}},
            results: {code: 'SUCCESS', msg: []},
            config: {'results': [sampleConfig]},
          },
          1);
      }
    },
    false);
}
