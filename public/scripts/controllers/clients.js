'use strict';

angular.module('gym').controller('ClientsCtrl', function ($scope, $resource) {
    var resource = $resource('/clients/:_id', {_id:'@_id'});

    $scope.clients = resource.query();

    $scope.gridOptions = {
        data: 'clients',
        enableCellEditOnFocus: true,
        columnDefs: [
            {
                field:'name',
                displayName:'ФИО',
                enableCellEditOnFocus: true
            },
            {
                field:'age',
                displayName:'Возраст',
                enableCellEditOnFocus: true
            },
            {
                field:'sex',
                displayName:'Пол'
            }
        ]

    };

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
