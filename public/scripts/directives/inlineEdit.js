'use strict';

angular.module('gym').directive('inlineEdit', function () {
    return {
        templateUrl: 'scripts/directives/inlineEdit.html',
        restrict: 'E',
        scope: {
            model: '='
        },
        link: function (scope, element, attrs) {
            scope.editMode = false;

            scope.toggleEditMode = function () {
                scope.editMode = !scope.editMode;
            }
        }
    };
});
