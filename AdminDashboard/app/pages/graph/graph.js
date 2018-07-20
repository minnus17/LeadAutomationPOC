(function () {
    angular.module('samplespa')
    .controller('graphsCtrl', ['$scope', graphsCtrl]);

    function graphsCtrl($scope) {
        $scope.message = "message from graphs page";
    }


}());