'use strict';

export class AjaxRequest {
    constructor() {
        console.log('ajaxReq');
        /*this.getF = getF;
        this.post = post; 
        this.put = put;
        this.del = del;  */
    }

    get(config) {
        console.log('get', config);

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

    post(config) {
        let peticionConfig = {
            url: null,
            params: null,
            timeout: null
        };
        peticionConfig = $.extend({}, peticionConfig, config);

        return $.ajax({
            method: 'POST',
            url: peticionConfig.url,
            params: peticionConfig.params
        });
    }

    put(config) {
        let peticionConfig = {
            url: null,
            params: null,
            timeout: null
        };
        peticionConfig = $.extend({}, peticionConfig, config);

        return $.ajax({
            method: 'PUT',
            url: peticionConfig.url,
            params: peticionConfig.params
        });
    }

    del(config) {
        let peticionConfig = {
            url: null,
            params: null,
            timeout: null
        };
        peticionConfig = $.extend({}, peticionConfig, config);

        return $.ajax({
            method: 'DELETE',
            url: peticionConfig.url,
            params: peticionConfig.params
        });
    }
}
