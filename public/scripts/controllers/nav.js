angular.module('gym').controller('NavCtrl', function ($scope, $location) {
    $scope.links = {
        'clients': 'Клиенты'
    };
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1);
        return page === currentRoute ? 'active' : '';
    };
});