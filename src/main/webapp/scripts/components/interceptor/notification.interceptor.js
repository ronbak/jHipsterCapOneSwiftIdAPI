 'use strict';

angular.module('jhipsterswiftidApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterswiftidApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterswiftidApp-params')});
                }
                return response;
            }
        };
    });
