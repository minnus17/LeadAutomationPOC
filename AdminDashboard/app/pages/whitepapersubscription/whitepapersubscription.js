(function () {
    angular.module('samplespa')
    .controller('whitepapersubscriptionCtrl', ['$scope', '$mdDialog', whitepapersubscriptionCtrl]);

    function whitepapersubscriptionCtrl($scope, $mdDialog) {

        $scope.message = "message from subscription page";

        $scope.showAdvanced = function (ev) {
            $mdDialog.show({
                controller: 'whitepapersubscriptionCtrl',
                templateUrl: '/app/pages/whitepapersubscription/whitepapersubscribe.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
        };
    }



}());