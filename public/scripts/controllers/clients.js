'use strict';

angular.module('gym').controller('ClientsCtrl', function ($scope, $resource) {
    var resource = $resource('/clients/:_id', {_id:'@_id'});

    $scope.clients = resource.query();
    $scope.save = function (client) {
        client.$save();
        //resource.update({id: client.id}, client);
    };
    $scope.add = function() {
        var newResource = new resource($scope.newClient);
        newResource.$save(function () {
            $scope.clients.push(newResource);
        });
    };
});
