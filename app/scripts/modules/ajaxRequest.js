'use strict';

export class AjaxRequest {
    constructor() {
        
    }

    static get(config) {
        let peticionConfig = {
            url: null,
            params: null,
            timeout: null
        };
        peticionConfig = $.extend({}, peticionConfig, config);
        return $.ajax({
            method: 'GET',
            url: peticionConfig.url
        });
    }

    static post(config) {
        let peticionConfig = {
            url: null,
            params: null,
            timeout: null
        };
        peticionConfig = $.extend({}, peticionConfig, config);
        peticionConfig.params = JSON.stringify(peticionConfig.params ); 

        return $.ajax({
            method: 'POST',
            dataType: 'json',
            url: peticionConfig.url,
            data: peticionConfig.params
        });
    }

    static put(config) {
        let peticionConfig = {
            url: null,
            params: null,
            timeout: null
        };
        peticionConfig = $.extend({}, peticionConfig, config);
        peticionConfig.params = JSON.stringify(peticionConfig.params ); 

        return $.ajax({
            method: 'PUT',
            url: peticionConfig.url,
            data: peticionConfig.params
        });
    }

    static del(config) {
        let peticionConfig = {
            url: null,
            params: null,
            timeout: null
        };
        peticionConfig = $.extend({}, peticionConfig, config);
        peticionConfig.params = JSON.stringify(peticionConfig.params ); 


        return $.ajax({
            method: 'DELETE',
            url: peticionConfig.url,
            data: peticionConfig.params
        });
    }
}
