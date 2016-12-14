(function () {
    var app = angular.module('myApp', []);
    app.controller('MainCtrl', ['$scope', function ($scope) {
        $scope.skladka = [
            {val: '1', text: 'jednorazowa'},
            {val: '0.02', text: '2 raty'},
            {val: '0.04', text: '4 raty'}
        ];
    }])
})();
