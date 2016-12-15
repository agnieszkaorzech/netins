(function () {
    const app = angular.module('myApp', []);
    app.controller('MainCtrl', ['$scope', function ($scope) {
        const self = this;
        self.bezszkodowaJazda = null;
        self.kwota = null;
        self.rata = null;
        $scope.visibleAlert = false;
        $scope.visibleWarning = false;
        $scope.parametryUbezpieczenia = function (kwota) {
            $scope.visibleAlert = false;
            let value = null;
            for (let v of $scope.stawka) {
                if (kwota >= v.low && kwota <= v.high) {
                    value = v.val
                }
                if (kwota < 100 || kwota > 10000) {
                    $scope.visibleAlert = true;
                }
            }
            return value;
        };
        $scope.stawka = [
            {low: 100, high: 1000, val: 20},
            {low: 1001, high: 3000, val: 70},
            {low: 3001, high: 6000, val: 130},
            {low: 6001, high: 9000, val: 180},
            {low: 9001, high: 20000, val: 200},
        ];
        $scope.skladka = [
            {val: '-0.02', text: 'jednorazowa'},
            {val: '0.00', text: '2 raty'},
            {val: '0.04', text: '4 raty'}
        ];
        $scope.jazda = [
            {val: '-0.05', text: 'TAK'},
            {val: '0.08', text: 'NIE'}
        ];

        $scope.oblicz = function () {
            $scope.visibleWarning = false;
            if (self.bezszkodowaJazda === null || self.kwota === null || self.rata === null) {
                $scope.visibleWarning = true;
                return;
            }
            let result = parseFloat($scope.parametryUbezpieczenia(self.kwota)) * (1 + parseFloat(self.bezszkodowaJazda)) * (1 + parseFloat(self.rata));
            if (result > parseInt(result)) {
                self.wynik = parseInt(result) + 1;
                return;
            }
            self.wynik = result;
        };
        $scope.czysc = function () {
            $scope.visibleAlert = false;
            $scope.visibleWarning = false;
            self.bezszkodowaJazda = '';
            self.kwota = '';
            self.rata = '';
            self.wynik = '';
        }
    }])
})();
