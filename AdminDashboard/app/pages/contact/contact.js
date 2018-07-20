//(function () {
//    angular.module('samplespa')
//    .controller('contactCtrl', ['$scope', contactCtrl]);

//    function contactCtrl($scope) {
//        $scope.message = "message from contact page";
//    }


//}());

(function () {
    'use strict';
    angular
        .module('samplespa')
        .controller('contactCtrl', ['$scope', 'contactformService', '$http', contactCtrl]);

    function contactCtrl($scope, contactformService, $http) {
       
        var original = contactformService.details;
        $scope.details = contactformService.details;

        $scope.submitForm = function (isValid) {

            if (isValid) {
                $http({
                    method: 'POST',
                    url: 'https://cla-leadformtoqueuefunctionapp.azurewebsites.net/api/LeadDataToQueue',
                    data: $scope.details
                }).then(success, failure);

                function success(response) {
                    alert('Data submitted successfully!');
                    console.log(response);
                    $scope.details = angular.copy(original);     
                    $scope.websiteForm.$setPristine();
                }

                function failure() {
                    alert('noooo');
                    console.log(response);
                }
            } else {
                alert('It looks like you are missing some inputs. Please try again.');
            }
        }
    }
}());