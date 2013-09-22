'use strict';

angular.module('gym').controller('ClientsCtrl', function ($scope, $resource) {
    var clientsRead = $resource('/clients');
    var clientsUpdate = $resource('/clients/:id', {id:'@id'}, {update: {method: 'PUT'}});

    $scope.client = clientsRead.query();
    $scope.save = function (client) {
        clientsUpdate.update({id: client.id}, client);
    };
    $scope.add = function() {
        var newResource = new clientsUpdate($scope.newClient);
        newResource.$save(function () {
            $scope.clients.push(newResource);
        });
    };
});
