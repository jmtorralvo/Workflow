(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*exported runtime, TranslateAPI, Utils, app */

'use strict';

var _modulesUtils = require('./modules/utils');

/// Classes

var _modulesTranslateAPI = require('./modules/translateAPI');

var _modulesWorkflowApp = require('./modules/workflowApp');

var app = new _modulesWorkflowApp.WorkflowApp($('#section-view'), $('#workflow-navbar'));

/*var myModel = {};
DataBind.bind($('#section-view'), myModel);*/

},{"./modules/translateAPI":3,"./modules/utils":4,"./modules/workflowApp":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AjaxRequest = (function () {
    function AjaxRequest() {
        _classCallCheck(this, AjaxRequest);
    }

    _createClass(AjaxRequest, null, [{
        key: 'get',
        value: function get(config) {
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
    }, {
        key: 'post',
        value: function post(config) {
            var peticionConfig = {
                url: null,
                params: null,
                timeout: null
            };
            peticionConfig = $.extend({}, peticionConfig, config);
            peticionConfig.params = JSON.stringify(peticionConfig.params);

            return $.ajax({
                method: 'POST',
                dataType: 'json',
                url: peticionConfig.url,
                data: peticionConfig.params
            });
        }
    }, {
        key: 'put',
        value: function put(config) {
            var peticionConfig = {
                url: null,
                params: null,
                timeout: null
            };
            peticionConfig = $.extend({}, peticionConfig, config);
            peticionConfig.params = JSON.stringify(peticionConfig.params);

            return $.ajax({
                method: 'PUT',
                url: peticionConfig.url,
                data: peticionConfig.params
            });
        }
    }, {
        key: 'del',
        value: function del(config) {
            var peticionConfig = {
                url: null,
                params: null,
                timeout: null
            };
            peticionConfig = $.extend({}, peticionConfig, config);
            peticionConfig.params = JSON.stringify(peticionConfig.params);

            return $.ajax({
                method: 'DELETE',
                url: peticionConfig.url,
                data: peticionConfig.params
            });
        }
    }]);

    return AjaxRequest;
})();

exports.AjaxRequest = AjaxRequest;

},{}],3:[function(require,module,exports){
/*exported TranslateAPI */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ajaxRequest = require('./ajaxRequest');

var TranslateAPI = (function (_AjaxRequest) {
    _inherits(TranslateAPI, _AjaxRequest);

    function TranslateAPI() {
        _classCallCheck(this, TranslateAPI);

        _get(Object.getPrototypeOf(TranslateAPI.prototype), 'constructor', this).call(this);
    }

    _createClass(TranslateAPI, null, [{
        key: 'getTranslationItems',
        value: function getTranslationItems() {
            /* let req = new AjaxRequest(); 
             return req.get(obj);*/
            return _get(Object.getPrototypeOf(TranslateAPI), 'get', this).call(this, {
                url: './mocks/getJsons/list-trad.json'
            });
        }
    }, {
        key: 'getTranslationItemByUserId',
        value: function getTranslationItemByUserId(userId) {
            /* return super.get({
                 url: './mocks/posible-in-charge.json'
             });*/
        }
    }, {
        key: 'getLanguageInCharge',
        value: function getLanguageInCharge() {
            return _get(Object.getPrototypeOf(TranslateAPI), 'get', this).call(this, {
                url: './mocks/getJsons/language-inCharge-array.json'
            });
        }
    }, {
        key: 'getProvidersInCharge',
        value: function getProvidersInCharge() {
            return _get(Object.getPrototypeOf(TranslateAPI), 'get', this).call(this, {
                url: './mocks/getJsons/providers-inCharge-array.json'
            });
        }
    }, {
        key: 'getAllProviders',
        value: function getAllProviders() {
            return _get(Object.getPrototypeOf(TranslateAPI), 'get', this).call(this, {
                url: './mocks/getJsons/providers-array.json'
            });
        }
    }, {
        key: 'getAllLanguages',
        value: function getAllLanguages() {
            return _get(Object.getPrototypeOf(TranslateAPI), 'get', this).call(this, {
                url: './mocks/getJsons/languages-array.json'
            });
        }
    }, {
        key: 'addLanguageAndPersonInCharge',
        value: function addLanguageAndPersonInCharge(obj) {
            return _get(Object.getPrototypeOf(TranslateAPI), 'post', this).call(this, {
                url: '/service/addLanguageAndPersonInCharge',
                params: obj
            });
        }
    }, {
        key: 'addProvider',
        value: function addProvider(obj) {
            return _get(Object.getPrototypeOf(TranslateAPI), 'post', this).call(this, {
                url: '/service/addProvider',
                params: obj
            });
        }
    }, {
        key: 'deleteLangProvider',
        value: function deleteLangProvider(obj) {
            return _get(Object.getPrototypeOf(TranslateAPI), 'del', this).call(this, {
                url: '/service/deleteLangProvider',
                params: obj
            });
        }
    }, {
        key: 'modifyProvider',
        value: function modifyProvider(obj) {
            return _get(Object.getPrototypeOf(TranslateAPI), 'put', this).call(this, {
                url: '/service/modifyProvider',
                params: obj
            });
        }
    }, {
        key: 'changePersonInCharge',
        value: function changePersonInCharge(par) {
            /*return super.put({
                url: './mocks/posible-in-charge.json',
                params: 
            });*/
        }
    }]);

    return TranslateAPI;
})(_ajaxRequest.AjaxRequest);

exports.TranslateAPI = TranslateAPI;

},{"./ajaxRequest":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Utils = (function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    // EXCELLL

    _createClass(Utils, null, [{
        key: 'exportExcel',
        value: function exportExcel(filename, wrapArray, ev, headerTemplate) {
            var a = document.createElement('a'),
                dataType = 'data:application/vnd.ms-excel',
                tableHtml = headerTemplate ? headerTemplate : '';
            for (var i = 0; i < wrapArray.length; i++) {
                tableHtml += wrapArray[i][0].outerHTML;
                tableHtml += '<table id="translate-table-comments"><tbody><tr></tr><tr><td class="comments">-----------------------------<br></td></tr></tbody></table>';
            }
            a.href = dataType + ', ' + escape(tableHtml);
            a.download = filename + '.xls';
            a.click();
            ev.preventDefault();
        }

        //// DATE
    }, {
        key: 'formatDate',
        value: function formatDate(time) {
            var date = new Date(time),
                hours = date.getHours(),
                minutes = date.getMinutes(),
                ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;

            return date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear();
        }
    }, {
        key: 'getCurrentDate',
        value: function getCurrentDate() {
            var currentTime = new Date(),
                day = currentTime.getDate(),
                month = currentTime.getMonth() + 1,
                year = currentTime.getFullYear();

            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;

            var todayDate = day + '/' + month + '/' + year;
            return todayDate.toString();
        }

        /// LITERALES
    }, {
        key: 'getPriorityLabel',
        value: function getPriorityLabel(num) {
            var labels = ['Baja', 'Media', 'Alta'];
            return labels[num];
        }
    }, {
        key: 'getState',
        value: function getState(num) {
            var labels = ['Pendiente de traducción', 'Pendiente de aprobación', 'Aprobado'];
            return labels[num];
        }

        /// MANAGE SELECTS
    }, {
        key: 'populateSelect',
        value: function populateSelect(array, elem, propName) {
            elem.empty();
            for (var i = 0; i < array.length; i++) {
                var opt = document.createElement('option');
                opt.innerHTML = array[i][propName];
                opt.value = array[i].id;
                elem[0].appendChild(opt);
            }
        }

        ///VALIDATIONS
    }, {
        key: 'validateEmail',
        value: function validateEmail(email) {
            var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return re.test(email);
        }
    }]);

    return Utils;
})();

exports.Utils = Utils;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomBtn = (function (_HTMLElement) {
    _inherits(CustomBtn, _HTMLElement);

    function CustomBtn() {
        _classCallCheck(this, CustomBtn);

        _get(Object.getPrototypeOf(CustomBtn.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CustomBtn, [{
        key: 'createdCallback',

        // Fires when an instance of the element is created.
        value: function createdCallback() {
            var _this = this;

            $(this).append('<button type="button" class="btn ' + $(this).attr('data-class') + '">' + $(this).attr('label') + '</button>');
            $(this).on('click', function (ev) {
                $(_this).trigger($(_this).attr('event'));
                ev.preventDefault();
            });
        }

        // Fires when an instance was inserted into the document.
    }, {
        key: 'attachedCallback',
        value: function attachedCallback() {}

        // Fires when an instance was removed from the document.
    }, {
        key: 'detachedCallback',
        value: function detachedCallback() {}

        // Fires when an attribute was added, removed, or updated.
        /*jshint unused:true*/
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(attr, oldVal, newVal) {}

        /*jshint unused:false*/
    }]);

    return CustomBtn;
})(HTMLElement);

exports.CustomBtn = CustomBtn;

document.registerElement('custom-btn', CustomBtn);

},{}],6:[function(require,module,exports){
/*exported WorkflowNavbar, webComponents */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _workflowNavbar = require('./workflowNavbar');

var _pagesPages = require('../pages/pages');

var pages = _interopRequireWildcard(_pagesPages);

var _webcomponentsRepsol = require('./webcomponents-repsol');

var webComponents = _interopRequireWildcard(_webcomponentsRepsol);

var WorkflowApp = (function () {
    function WorkflowApp(elem, navbar) {
        var _this = this;

        _classCallCheck(this, WorkflowApp);

        this.elem = elem;
        this.navbar = new _workflowNavbar.WorkflowNavbar(navbar);
        this.state = 'home';
        this.currentSec = 'empty';

        navbar.on('CHANGE_SEC', function (ev) {
            var dest = $(ev.target).find('a').attr('href').replace('#', '');
            _this.changeState(dest);
        });

        /*        elem.tooltip({
                    items: '[data-tt]',
                    content: function() {
                        var element = $(this);
                        if (element.is('[data-tt]')) {
                            return element.attr("tt");
                        }
                    }
                });*/
    }

    _createClass(WorkflowApp, [{
        key: 'changeState',
        value: function changeState(newState) {
            var _this2 = this;

            this.state = newState;
            /*jshint unused:false*/
            this.elem.load('sections/' + newState + '.html', function (tmpl, status) {
                if (status === 'success') {
                    _this2.currentSec = null;
                    _this2.instanceSec(newState);
                }
            });
            /*jshint unused:true*/
        }
    }, {
        key: 'instanceSec',
        value: function instanceSec(newState) {
            if (newState === 'listado-traducciones') {
                this.currentSec = new pages.TransationsList();
            }
            if (newState === 'configurar-responsables') {
                this.currentSec = new pages.ConfigInCharge($('#section-view'));
            }
            if (newState === 'config-proveedores') {
                this.currentSec = new pages.ConfigProviders($('#section-view'));
            }
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this.state;
        }
    }]);

    return WorkflowApp;
})();

exports.WorkflowApp = WorkflowApp;

},{"../pages/pages":8,"./webcomponents-repsol":5,"./workflowNavbar":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var WorkflowNavbar = function WorkflowNavbar(elem) {
    _classCallCheck(this, WorkflowNavbar);

    this.elem = elem;

    $(elem).find('li').on('click', function (ev) {
        //console.log('ev - navbar', ev);
        $(ev.currentTarget).trigger('CHANGE_SEC');
    });
};

exports.WorkflowNavbar = WorkflowNavbar;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _modulesTranslateAPI = require('../modules/translateAPI');

var _modulesUtils = require('../modules/utils');

var TransationsList = (function () {
    function TransationsList() {
        var _this = this;

        _classCallCheck(this, TransationsList);

        var a = new Date();
        this.model = undefined;
        var wrap = $('#wrap-listado-traducciones');

        _modulesTranslateAPI.TranslateAPI.getTranslationItems().then(function (resp) {
            _this.model = resp;
            _this.drawTables(_this.model);
            _this.configEvents();
        });
    }

    _createClass(TransationsList, [{
        key: 'configEvents',
        value: function configEvents() {
            var _this2 = this;

            /// Event Export
            $('.btnExport').on('click', function (ev) {
                $('#translate-table-to-export').bootstrapTable({
                    data: _this2.model.items,
                    columns: [{
                        field: 'id',
                        title: 'Id'
                    }, {
                        field: 'page',
                        title: 'Página',
                        sortable: true
                    }, {
                        field: 'demandBy',
                        title: 'Solicitado por',
                        sortable: true
                    }, {
                        field: 'uri',
                        title: 'Código URI'
                    }, {
                        field: 'originalLanguage',
                        title: 'Idioma origen',
                        sortable: true
                    }, {
                        field: 'destinationLanguage',
                        title: 'Idioma destino',
                        sortable: true
                    }, {
                        field: 'currentState',
                        title: 'Estado',
                        sortable: true,
                        formatter: function formatter(value) {
                            return _modulesUtils.Utils.getState(value);
                        }
                    }, {
                        field: 'priority',
                        title: 'Prioridad',
                        sortable: true,
                        formatter: function formatter(value, row, index) {
                            return _modulesUtils.Utils.getPriorityLabel(value);
                        }
                    }, {
                        field: 'mode',
                        title: 'Modo',
                        sortable: true
                    }, {
                        field: 'initialDate',
                        title: 'Fecha Inicio',
                        sortable: true,
                        formatter: function formatter(value) {
                            return _modulesUtils.Utils.formatDate(value);
                        }
                    }]
                });

                $('#wrap-table-to-export').find('.fixed-table-loading').remove();
                _modulesUtils.Utils.exportExcel('Listado traducciones ' + _modulesUtils.Utils.getCurrentDate(), [$('#wrap-table-to-export')], ev, null);
            });

            $('.btnExport-modal').on('click', function (ev) {
                _modulesUtils.Utils.exportExcel('Listado detalle traducciones ' + _modulesUtils.Utils.getCurrentDate(), [$('#translate-table-detail'), $('#translate-table-historical'), $('#translate-table-comments')], ev, '<div class="row margin-bottom-lg"><div class="col-xs-12"><h2>Detalle Traducción</h2></div></div>');
            });

            $('.btn-publish').on('click', function (ev) {
                _this2.publishTranslate(ev.currentTarget.attributes['data-id'].value);
            });

            //Filter
            $('#filter-translations').keyup(function () {
                var rex = new RegExp($(this).val(), 'i');
                $('.searchable tr').hide();
                $('.searchable tr').filter(function () {
                    return rex.test($(this).text());
                }).show();
            });
        }
    }, {
        key: 'drawTables',
        value: function drawTables(resp) {
            var _this3 = this;

            $('#translate-table').bootstrapTable({
                data: resp.items,
                search: false,
                onClickCell: function onClickCell(field, value, row, element) {
                    if (field !== 'inCharge' && field !== 'currentState') {
                        _this3.displayDetails(field, value, row, element);
                    }
                },
                columns: [{
                    field: 'id',
                    title: 'Id'
                }, {
                    field: 'page',
                    title: 'Página',
                    sortable: true
                }, {
                    field: 'demandBy',
                    title: 'Solicitado por',
                    sortable: true
                }, {
                    field: 'uri',
                    title: 'Código URI',
                    formatter: function formatter(value, row, index) {
                        return '<a href="' + value + '" target="_blank">link</a>';
                    }
                }, {
                    field: 'originalLanguage',
                    title: 'Idioma origen',
                    sortable: true
                }, {
                    field: 'destinationLanguage',
                    title: 'Idioma destino',
                    sortable: true
                }, {
                    field: 'currentState',
                    title: 'Estado',
                    sortable: true,
                    formatter: function formatter(value) {
                        return _modulesUtils.Utils.getState(value);
                    }
                }, {
                    field: 'priority',
                    title: 'Prioridad',
                    sortable: true,
                    formatter: function formatter(value, row, index) {
                        return _modulesUtils.Utils.getPriorityLabel(value);
                    }
                }, {
                    field: 'mode',
                    title: 'Modo',
                    sortable: true
                }, {
                    field: 'initialDate',
                    title: 'Fecha Inicio',
                    sortable: true,
                    formatter: function formatter(value, row, index) {
                        return _modulesUtils.Utils.formatDate(value);
                    }
                }, {
                    field: 'currentState',
                    title: 'Publicar',
                    formatter: function formatter(value, row, index) {
                        var tmp = value === 2 ? '<button type="button" id="publish-btn-' + index + '" class="btn btn-primary btn-publish" data-id="' + row.id + '">Aceptar</button>' : '<button title="Aún no está traducido y no puede ser publicado" disabled type="button" class="btn btn-primary btn-publish data-id=' + row.id + '">Aceptar</button>';
                        return tmp;
                    }
                }]
            });
        }
    }, {
        key: 'displayDetails',
        value: function displayDetails(field, value, row, element) {

            $('#translate-modal-details').find('.modal-title').html('Detalle ' + row.page + ' por ' + row.demandBy);

            $('#translate-table-detail').bootstrapTable({
                data: [row],
                search: false,
                columns: [{
                    field: 'uri',
                    title: 'Código URI',
                    formatter: function formatter(value, row, index) {
                        return '<a href="' + value + '" target="_blank">' + value + '</a>';
                    }
                }, {
                    field: 'originalLanguage',
                    title: 'Idioma origen'
                }, {
                    field: 'destinationLanguage',
                    title: 'Idioma destino'
                }, {
                    field: 'detail.channel',
                    title: 'Canal'
                }, {
                    field: 'demandBy',
                    title: 'Solicitado por'
                }, {
                    field: 'currentState',
                    title: 'Estado',
                    formatter: function formatter(value) {
                        return _modulesUtils.Utils.getState(value);
                    }
                }, {
                    field: 'priority',
                    title: 'Prioridad',
                    formatter: function formatter(value, row, index) {
                        return _modulesUtils.Utils.getPriorityLabel(value);
                    }
                }]
            });
            $('#translate-table-historical').bootstrapTable({
                data: row.detail.historical,
                search: false,
                columns: [{
                    field: 'state',
                    title: 'Tarea'
                }, {
                    field: 'initialDate',
                    title: 'Fecha inicio',
                    formatter: function formatter(value, row, index) {
                        return _modulesUtils.Utils.formatDate(value);
                    }
                }, {
                    field: 'finalDate',
                    title: 'Fecha final',
                    formatter: function formatter(value, row, index) {
                        return _modulesUtils.Utils.formatDate(value);
                    }
                }]
            });
            $('#translate-modal-details').find('.comments').html(row.detail.comments);

            //If we need to modify data throught browser:
            //DataBind.bind($('#translation-modal-details'), row);
            $('#translate-modal-details').modal('show');
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            $('select option:selected').each(function (index, val) {
                _this4.model.items[index].inCharge = val.value;
            });
            $('#translate-table').bootstrapTable('load', this.model.items);
            //DataBind.bind(wrap, this.model.items);
        }
    }, {
        key: 'publishTranslate',
        value: function publishTranslate(id) {
            console.log('publicar traducción ' + id);
        }
    }]);

    return TransationsList;
})();

exports.TransationsList = TransationsList;

var ConfigInCharge = (function () {
    function ConfigInCharge(container) {
        var _this5 = this;

        _classCallCheck(this, ConfigInCharge);

        this.container = container;
        this.languagesLinkedInCharge = [];
        this.posibleLanguages = [];

        _modulesTranslateAPI.TranslateAPI.getLanguageInCharge().then(function (resp) {
            _this5.languagesLinkedInCharge = resp;
            _this5.renderLanguages(_this5.languagesLinkedInCharge);
            _this5.configEvents();
        });
    }

    _createClass(ConfigInCharge, [{
        key: 'configEvents',
        value: function configEvents() {
            var _this6 = this;

            $('#add-inCharge-btn').on('click', function (ev) {
                _modulesTranslateAPI.TranslateAPI.getAllLanguages().then(function (resp) {
                    _this6.posibleLanguages = resp;
                    _modulesUtils.Utils.populateSelect(resp, $('#add-language-modal').find('.language-select'), 'languageName');
                    $('#add-language-modal').find('#email-inCharge-modal').val('');
                    $('#add-language-modal').modal('show');
                });
            });

            $('#accept-adding-language-btn').on('click', function (ev) {
                if (_modulesUtils.Utils.validateEmail($('#email-inCharge-modal').val()) === true) {
                    var objToPost = {
                        id: $('#add-language-modal').find('.language-select').val(),
                        inCharge: $('#add-language-modal').find('#email-inCharge-modal').val()
                    };
                    _this6.postNewRow(objToPost);
                } else {
                    $('#add-language-modal').find('.alert-msg').animate({
                        opacity: 1
                    }, 1, function () {
                        setTimeout(function () {
                            $('#add-language-modal').find('.alert-msg').css('opacity', 0);
                        }, 4000);
                    });
                }
            });
        }

        //SRV
    }, {
        key: 'renderLanguages',
        value: function renderLanguages(array) {
            var _this7 = this;

            var count = 0;
            $('#add-language-modal').modal('hide');
            $('.container-manage-select').find('form').empty();

            var drawLanguagesIncharge = function drawLanguagesIncharge(obj) {
                $('.container-manage-select').find('.row-language').last().attr('row-id', obj.id);
                $('.container-manage-select').find('.language-title').last().html(obj.language.languageName);
                $('.container-manage-select').find('input').last().val(obj.inCharge);
            };

            var iteratorToDrawRows = function iteratorToDrawRows() {
                $('.container-manage-select').find('form').append($('<div class="row row-language">').load('templates/idioma-responsable.html', function (tmpl, status) {
                    if (status === 'success') {
                        if (count === array.length - 1) {
                            drawLanguagesIncharge(array[count]);
                            _this7.setEventToCustomBtns(array);
                            return;
                        } else {
                            drawLanguagesIncharge(array[count]);
                            count++;
                            iteratorToDrawRows();
                        }
                    }
                }));
            };

            iteratorToDrawRows();
        }
    }, {
        key: 'postNewRow',
        value: function postNewRow(obj) {
            var _this8 = this;

            _modulesTranslateAPI.TranslateAPI.addLanguageAndPersonInCharge(obj).then(function (resp) {
                _modulesTranslateAPI.TranslateAPI.getLanguageInCharge().then(function (resp) {
                    _this8.languagesLinkedInCharge = resp;
                    _this8.renderLanguages(_this8.languagesLinkedInCharge);
                });
            });
        }
    }, {
        key: 'setEventToCustomBtns',
        value: function setEventToCustomBtns(array) {
            var _this9 = this;

            $('custom-btn').each(function (index, el) {
                $(el).on('DELETE_LANGUAGE', function (ev) {
                    _this9.deleteLang(array[index]);
                });
            });
        }
    }, {
        key: 'deleteLang',
        value: function deleteLang(obj) {
            console.log('delete', obj.id);
        }
    }]);

    return ConfigInCharge;
})();

exports.ConfigInCharge = ConfigInCharge;

var ConfigProviders = (function () {
    function ConfigProviders(container) {
        var _this10 = this;

        _classCallCheck(this, ConfigProviders);

        this.container = container;
        this.providersLinkedInCharge = [];
        this.posibleProviders = [];
        this.posibleLanguages = [];

        _modulesTranslateAPI.TranslateAPI.getAllProviders().then(function (respProv) {
            _this10.posibleProviders = respProv;

            _modulesTranslateAPI.TranslateAPI.getProvidersInCharge().then(function (resp) {
                _this10.providersLinkedInCharge = resp;
                _this10.renderProviders(_this10.providersLinkedInCharge);
                _this10.configEvents();
            });
        });
    }

    _createClass(ConfigProviders, [{
        key: 'configEvents',
        value: function configEvents() {
            var _this11 = this;

            $('#add-provider-btn').on('click', function (ev) {
                _this11.openModal();
            });

            $('#accept-adding-provider-btn').on('click', function (ev) {
                var objToPost = {
                    id: $('#add-provider-modal').find('.language-select').val(),
                    inCharge: $('#add-provider-modal').find('.provider-select').val()
                };
                console.log('objToPost', objToPost);
                _this11.postNewRow(objToPost);
            });
        }
    }, {
        key: 'openModal',
        value: function openModal() {
            var _this12 = this;

            _modulesTranslateAPI.TranslateAPI.getAllProviders().then(function (respProv) {
                _this12.posibleProviders = respProv;
                _modulesUtils.Utils.populateSelect(respProv, $('#add-provider-modal').find('.provider-select'), 'providerName');

                _modulesTranslateAPI.TranslateAPI.getAllLanguages().then(function (respLang) {
                    _this12.posibleLanguages = respLang;
                    _modulesUtils.Utils.populateSelect(respLang, $('#add-provider-modal').find('.language-select'), 'languageName');
                    $('#add-provider-modal').modal('show');
                });
            });
        }

        //SRV
    }, {
        key: 'renderProviders',
        value: function renderProviders(array) {
            var _this13 = this;

            var count = 0;
            $('#add-provider-modal').modal('hide');
            $('.container-manage-select').find('form').empty();

            var drawLanguagesIncharge = function drawLanguagesIncharge(obj) {
                var inp = $('.container-manage-select').find('input').last(),
                    sel = $('.container-manage-select').find('.provider-select').last(),
                    tit = $('.container-manage-select').find('.language-title').last(),
                    row = $('.container-manage-select').find('.row-language').last(),
                    wrapConfirm = $('.container-manage-select').find('.wrap-btns-confirm');

                wrapConfirm.hide();
                row.attr('row-id', obj.id);
                tit.html(obj.language.languageName);
                inp.val(obj.provider.providerName);
                sel.hide();
                _modulesUtils.Utils.populateSelect(_this13.posibleProviders, sel, 'providerName');
                sel.val(obj.provider.id);
            };

            var iteratorToDrawRows = function iteratorToDrawRows() {
                $('.container-manage-select').find('form').append($('<div class="row row-language">').load('templates/idioma-proveedor.html', function (tmpl, status) {
                    if (status === 'success') {
                        if (count === array.length - 1) {
                            drawLanguagesIncharge(array[count]);
                            _this13.setEventToCustomBtns(array);
                            return;
                        } else {
                            drawLanguagesIncharge(array[count]);
                            count++;
                            iteratorToDrawRows();
                        }
                    }
                }));
            };

            iteratorToDrawRows();
        }
    }, {
        key: 'setEventToCustomBtns',
        value: function setEventToCustomBtns(array) {
            var _this14 = this;

            $('.btn-delete').each(function (index, el) {
                $(el).on('DELETE_PROVIDER', function (ev) {
                    _this14.deleteLang(array[index]);
                });
            });

            $('.btn-modify').each(function (index, el) {
                $(el).on('MODIFY_PROVIDER', function (ev) {
                    var row = $('.row-language[row-id="' + array[index].id + '"]');
                    _this14.showConfirm(row, true);
                });
            });

            $('.btn-acept').each(function (index, el) {
                $(el).on('ACEPT_CHANGE_PROVIDER', function (ev) {
                    var row = $('.row-language[row-id="' + array[index].id + '"]');
                    _this14.changeProviderRow(array[index], row);
                });
            });

            $('.btn-cancel').each(function (index, el) {
                $(el).on('CANCEL_CHANGE_PROVIDER', function (ev) {
                    var row = $('.row-language[row-id="' + array[index].id + '"]');
                    row.find('.provider-select').val(array[index].provider.id);
                    _this14.showConfirm(row, false);
                });
            });
        }
    }, {
        key: 'changeProviderRow',
        value: function changeProviderRow(obj, row) {
            var _this15 = this;

            row.find('.wrap-btns-confirm').find('button').prop('disabled', 'true');
            if (obj.provider.id === row.find('.provider-select').val()) {
                this.showConfirm(row, false);
                row.find('.wrap-btns-confirm').find('button').prop('disabled', 'false');
            } else {
                _modulesTranslateAPI.TranslateAPI.modifyProvider(obj).then(function (respMod) {
                    _modulesTranslateAPI.TranslateAPI.getProvidersInCharge().then(function (resp) {
                        _this15.providersLinkedInCharge = resp;
                        _this15.showConfirm(row, false);
                        _this15.renderProviders(_this15.providersLinkedInCharge);
                    });
                });
            }
        }
    }, {
        key: 'deleteLang',
        value: function deleteLang(obj) {
            var _this16 = this;

            _modulesTranslateAPI.TranslateAPI.deleteLangProvider(obj).then(function (respDel) {
                _modulesTranslateAPI.TranslateAPI.getProvidersInCharge().then(function (resp) {
                    _this16.providersLinkedInCharge = resp;
                    _this16.renderProviders(_this16.providersLinkedInCharge);
                });
            });
        }
    }, {
        key: 'postNewRow',
        value: function postNewRow(obj) {
            var _this17 = this;

            _modulesTranslateAPI.TranslateAPI.addProvider(obj).then(function (respPost) {
                _modulesTranslateAPI.TranslateAPI.getProvidersInCharge().then(function (resp) {
                    _this17.providersLinkedInCharge = resp;
                    _this17.renderProviders(_this17.providersLinkedInCharge);
                });
            });
        }
    }, {
        key: 'showConfirm',
        value: function showConfirm(row, sense) {
            if (sense === true) {
                row.find('.provider-select').show();
                row.find('input').hide();
                row.find('.wrap-btns-primary').animate({
                    opacity: 0
                }, 0.4, function () {
                    row.find('.wrap-btns-primary').hide();
                    row.find('.wrap-btns-confirm').css('opacity', 0);
                    row.find('.wrap-btns-confirm').show();
                    row.find('.wrap-btns-confirm').animate({
                        opacity: 1
                    }, 0.4);
                });
            } else if (sense === false) {
                row.find('.provider-select').hide();
                row.find('input').show();
                row.find('.wrap-btns-confirm').animate({
                    opacity: 0
                }, 0.4, function () {
                    row.find('.wrap-btns-confirm').hide();
                    row.find('.wrap-btns-primary').css('opacity', 0);
                    row.find('.wrap-btns-primary').show();
                    row.find('.wrap-btns-primary').animate({
                        opacity: 1
                    }, 0.4);
                });
            }
        }
    }]);

    return ConfigProviders;
})();

exports.ConfigProviders = ConfigProviders;

},{"../modules/translateAPI":3,"../modules/utils":4}]},{},[1]);
