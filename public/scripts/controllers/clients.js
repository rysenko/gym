'use strict';

angular.module('gym').controller('ClientsCtrl', function ($scope, $resource) {
    var clientsColl =  $resource('/clients');
    var clientsRes = $resource('/clients/:id', {id:'@id'}, {update: {method: 'PUT'}});

    $scope.client = clientsColl.query();
    $scope.save = function (client) {
        clientsRes.update({id:client.id}, client);
    };
    $scope.add = function() {
        var newResource = new clientsRes($scope.newClient);
        newResource.$save(function () {
            $scope.clients.push(newResource);
        });
    };
});
