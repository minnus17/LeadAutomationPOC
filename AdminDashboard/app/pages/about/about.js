(function () {
    angular.module('samplespa')
    .controller('aboutCtrl', ['$scope', aboutCtrl]);

    function aboutCtrl($scope) {
        $scope.message = "message from About page";
    }


}());