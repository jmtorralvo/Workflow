/* jshint ignore:start *//*exported AjaxRequest */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AjaxRequest = function AjaxRequest() {
    _classCallCheck(this, AjaxRequest);

    //console.log('ajaxReq');
    this.get = get;
    this.post = post;
    this.put = put;
    this.del = del;

    function get(config) {
        console.log('get', config);

        var peticionConfig = {
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

    function post(config) {
        var peticionConfig = {
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

    function put(config) {
        var peticionConfig = {
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

    function del(config) {
        var peticionConfig = {
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
};
//# sourceMappingURL=ajaxRequest.js.map

/*exported ModulePrueba */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ModulePrueba = function ModulePrueba(x, y) {
    _classCallCheck(this, ModulePrueba);

    console.log('ModulePrueba');
    return x + y;
};
//# sourceMappingURL=modulePrueba.js.map

/*exported TranslateAPI */
/*global AjaxRequest */

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TranslateAPI = function TranslateAPI() {
    _classCallCheck(this, TranslateAPI);

    var req = new AjaxRequest();

    this.getItems = getItems;
    this.getItem = getItem;
    this.sendToTranslate = sendToTranslate;

    function getItems(obj) {
        return req.get(obj);
    }

    function getItem(id) {
        /// params?
        return req.get({ id: id });
    }

    function sendToTranslate(obj) {
        return req.post(obj);
    }
};
//# sourceMappingURL=translateAPI.js.map

"use strict";

//console.log('configurar Proveedores');
//# sourceMappingURL=config-prov.js.map

/*global ModulePrueba, TranslateAPI */

'use strict';

var mod, transAPI;

mod = new ModulePrueba();
transAPI = new TranslateAPI();
transAPI.getItems({ nombre: 'nombre objeto' });

console.log('mod', mod);
//# sourceMappingURL=home.js.map
