(function () {
    angular.module('samplespa')
    .factory('contactformService', contactformService);

    function contactformService() {
        return {
            details: {
                id: 0,
                formid: 0,
                title: 'ContactUs',
                datecreated: '01/01/0001',
                dateupdated: '01/01/0001',
                data: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    company: '',
                    contactnumber: '',
                    country: '',
                    message: '',
                    referalurl: '',
                    sourcepage: '',
                    campaignid: 8,
                    ip:'192.168.5.45'
                }

            }
        }
    }




}());