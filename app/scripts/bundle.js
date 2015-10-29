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
                url: peticionConfig.url,
                params: peticionConfig.params
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

            return $.ajax({
                method: 'POST',
                url: peticionConfig.url,
                params: peticionConfig.params
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

            return $.ajax({
                method: 'PUT',
                url: peticionConfig.url,
                params: peticionConfig.params
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

            return $.ajax({
                method: 'DELETE',
                url: peticionConfig.url,
                params: peticionConfig.params
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
        key: 'getItems',
        value: function getItems() {
            /* let req = new AjaxRequest(); 
             return req.get(obj);*/
            return _get(Object.getPrototypeOf(TranslateAPI), 'get', this).call(this, {
                url: './mocks/list-trad.json'
            });
        }
    }, {
        key: 'getItemsByUserId',
        value: function getItemsByUserId(userId) {
            /* return super.get({
                 url: './mocks/posible-in-charge.json'
             });*/
        }
    }, {
        key: 'getPosibleInCharge',
        value: function getPosibleInCharge() {
            return _get(Object.getPrototypeOf(TranslateAPI), 'get', this).call(this, {
                url: './mocks/posible-in-charge.json'
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

    _createClass(Utils, null, [{
        key: 'isOdd',
        value: function isOdd(num) {
            var resp = null;
            resp = num % 2 === 0 ? true : false;
            return resp;
        }
    }, {
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
    }, {
        key: 'getPriorityLabel',
        value: function getPriorityLabel(num) {
            var pLabels = ['Baja', 'Media', 'Alta'];
            return pLabels[num];
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

var DeleteLangBtn = (function (_HTMLElement) {
    _inherits(DeleteLangBtn, _HTMLElement);

    function DeleteLangBtn() {
        _classCallCheck(this, DeleteLangBtn);

        _get(Object.getPrototypeOf(DeleteLangBtn.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(DeleteLangBtn, [{
        key: 'createdCallback',

        // Fires when an instance of the element is created.
        value: function createdCallback() {
            var _this = this;

            $(this).append('<button type="button" class="btn btn-primary">Eliminar idioma</button>');
            //this.textContent = 'Eliminar Idioma';
            $(this).on('click', function (ev) {
                $(_this).trigger('DELETE_LANGUAGE');
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

    return DeleteLangBtn;
})(HTMLElement);

exports.DeleteLangBtn = DeleteLangBtn;

document.registerElement('delete-lang-btn', DeleteLangBtn);

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
            if (newState === 'config-empresas') {
                this.currentSec = new pages.ConfigEnterprises($('#section-view'));
            }
            if (newState === 'select-idioma-empresa') {
                this.currentSec = new pages.SelectLanguages($('#section-view'));
                //this.currentSec.deleteLang(1);
                //pages.SelectLanguages.foo();
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

        this.model = undefined;
        this.posibleInCharge = [];
        var wrap = $('#wrap-listado-traducciones');

        _modulesTranslateAPI.TranslateAPI.getItems().then(function (resp) {
            _this.model = resp;
            _modulesTranslateAPI.TranslateAPI.getPosibleInCharge().then(function (resp) {
                _this.posibleInCharge = resp;
                _this.drawTables(_this.model);
            });
        });
    }

    _createClass(TransationsList, [{
        key: 'drawTables',
        value: function drawTables(resp) {
            var _this2 = this;

            $('#translate-table').bootstrapTable({
                data: resp.items,
                search: false,
                onClickCell: function onClickCell(field, value, row, element) {
                    if (field !== 'inCharge') {
                        _this2.displayDetails(field, value, row, element);
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
                    sortable: true
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
                    sortable: true
                }]
            });
            this.init();
        }
    }, {
        key: 'init',
        value: function init() {
            var _this3 = this;

            /// Event Export
            $('.btnExport').on('click', function (ev) {
                $('#translate-table-to-export').bootstrapTable({
                    data: _this3.model.items,
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
                        sortable: true
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
                        sortable: true
                    }]
                });

                $('#wrap-table-to-export').find('.fixed-table-loading').remove();
                _modulesUtils.Utils.exportExcel('Listado traducciones ' + _modulesUtils.Utils.getCurrentDate(), [$('#wrap-table-to-export')], ev, null);
            });

            $('.btnExport-modal').on('click', function (ev) {
                _modulesUtils.Utils.exportExcel('Listado detalle traducciones ' + _modulesUtils.Utils.getCurrentDate(), [$('#translate-table-detail'), $('#translate-table-historical'), $('#translate-table-comments')], ev, '<div class="row margin-bottom-lg"><div class="col-xs-12"><h2>Detalle Traducción</h2></div></div>');
            });

            // Event change person in charge
            $('select').on('change', function (ev) {
                _this3.render();
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
                    title: 'Estado'
                }, {
                    field: 'priority',
                    title: 'Prioridad',
                    formatter: function formatter(value, row, index) {
                        return _modulesUtils.Utils.getPriorityLabel(value);
                    }
                }, {
                    field: 'currentState',
                    title: 'Estado'
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
                    title: 'Fecha inicio'
                }, {
                    field: 'finalDate',
                    title: 'Fecha final'
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
    }]);

    return TransationsList;
})();

exports.TransationsList = TransationsList;

var ConfigInCharge = function ConfigInCharge(container) {
    _classCallCheck(this, ConfigInCharge);

    this.container = container;
    console.log('Historial ha sido instanciado dentro de ', container);
}

/*jshint unused:false*/
;

exports.ConfigInCharge = ConfigInCharge;

var ConfigEnterprises = function ConfigEnterprises(container) {
    _classCallCheck(this, ConfigEnterprises);
};

exports.ConfigEnterprises = ConfigEnterprises;

var SelectLanguages = (function () {
    function SelectLanguages(container) {
        var _this5 = this;

        _classCallCheck(this, SelectLanguages);

        //http://codepen.io/grnadav/pen/ptJKg?editors=101
        this.wrap = $('#wrap-select-idioma-empresa');
        this.languajesProvidersModel = {
            relations: [{
                lang: 'Inglés',
                prov: 'quest'
            }, {
                lang: 'Francés',
                prov: 'lingua'
            }, {
                lang: 'Portugués',
                prov: 'wordBee'
            }]
        };

        /*$('#deleteLang').on('click', (ev, ind) => {
            console.log(ev, ind);
        })*/
        $('delete-lang-btn').each(function (index, el) {
            $(el).on('DELETE_LANGUAGE', function (ev) {
                console.log('click', ev.target.attributes);
                _this5.deleteLang($(ev.target).attr('data-ind'));
            });
        });

        $('#confirmAddLanguageBtn').on('click', function (ev) {
            _this5.addLang();
        });

        DataBind.bind(this.wrap, this.languajesProvidersModel);
    }

    /*jshint unused:true*/

    _createClass(SelectLanguages, [{
        key: 'deleteLang',
        value: function deleteLang(ind) {
            console.log('delete', ind);
            //console.log('delete '+ this.languajesProvidersModel.relations[ind]);
        }
    }, {
        key: 'addLang',
        value: function addLang() {
            console.log('Añadimos un idioma');
            $('#addLangModal').modal('hide');
        }
    }]);

    return SelectLanguages;
})();

exports.SelectLanguages = SelectLanguages;

},{"../modules/translateAPI":3,"../modules/utils":4}]},{},[1]);
