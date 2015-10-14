/*exported AjaxRequest */

class AjaxRequest {
    constructor() {
        //console.log('ajaxReq');
        this.get = get;
        this.post = post;
        this.put = put;
        this.del = del; 

        function get(config) {  
            console.log('get', config);

            let peticionConfig = {
                url: null, 
                params: null,
                timeout: null
            };
            peticionConfig = $.extend({},peticionConfig, config);
            return $.ajax({
                method: 'GET',
                url: peticionConfig.url
            });
        }

        function post(config) {
            let peticionConfig = {
                url: null,
                params: null,
                timeout: null
            };
            peticionConfig = $.extend({},peticionConfig, config);

            return $.ajax({
                method: 'POST',
                url: peticionConfig.url,
                params: peticionConfig.params
            });
        }

        function put(config) {
            let peticionConfig = {
                url: null,
                params: null,
                timeout: null
            };
            peticionConfig = $.extend({},peticionConfig, config);

            return $.ajax({
                method: 'PUT',
                url: peticionConfig.url,
                params: peticionConfig.params  
            });
        }

        function del(config) {
            let peticionConfig = {
                url: null,
                params: null, 
                timeout: null
            };
            peticionConfig = $.extend({},peticionConfig, config);

            return $.ajax({
                method: 'DELETE',
                url: peticionConfig.url,
                params: peticionConfig.params
            });
        }
    }
}
