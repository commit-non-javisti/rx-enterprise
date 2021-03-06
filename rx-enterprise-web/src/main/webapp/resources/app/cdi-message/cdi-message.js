angular.module('cdiApp', ['ui.router'])

    .config(function($stateProvider) {

        $stateProvider
            .state('cdi', {
                url: "/cdi",
                templateUrl: "resources/app/commons/message.html",
                controller: 'messageController',
                data: {
                    socket: 'cdi',
                    title: 'Asynchronous EJB + CDI Event'
                }
            });
    });