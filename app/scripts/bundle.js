(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*exported runtime, utils, TranslateAPI, DataBind */

'use strict';

var _modulesUtils = require('./modules/utils');

/// Classes

var _modulesTranslateAPI = require('./modules/translateAPI');

var _modulesWorkflowApp = require('./modules/workflowApp');

var app = new _modulesWorkflowApp.WorkflowApp($('#section-view'), $('#workflow-navbar'));

console.log('4 is odd? ' + _modulesUtils.Utils.odd(4));

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
        value: function getItems(obj) {
            /* let req = new AjaxRequest(); 
             return req.get(obj);*/
            return _get(Object.getPrototypeOf(TranslateAPI), 'get', this).call(this, obj);
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
        key: 'odd',
        value: function odd(num) {
            var resp = null;
            resp = num % 2 === 0 ? true : false;
            return resp;
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

            $(this).append('<button>Eliminar Idioma</button>');
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
            if (newState === 'config-empresas') {
                this.currentSec = new pages.ConfigEnterprises($('#section-view'));
            }
            if (newState === 'historical-list') {
                this.currentSec = new pages.HistoricalPage($('#section-view'));
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

var TransationsList = (function () {
    function TransationsList() {
        var _this = this;

        _classCallCheck(this, TransationsList);

        this.model = undefined;
        this.wrap = $('#wrap-listado-traducciones');

        _modulesTranslateAPI.TranslateAPI.getItems({
            url: './mocks/list-trad.json'
        }).then(function (resp) {
            _this.model = resp;
            _this.drawTables(resp);
        });
    }

    _createClass(TransationsList, [{
        key: 'run',
        value: function run() {
            var _this2 = this;

            $('.btnExport').click(function (e) {
                var a = document.createElement('a');
                var dataType = 'data:application/vnd.ms-excel';
                var tableHtml = _this2.wrap[0].outerHTML.replace(/ /g, '%20');
                a.href = dataType + ', ' + tableHtml;
                a.download = 'Listado_traducciones' + '.xls';
                a.click();
                e.preventDefault();
            });

            /*  $('#filter').keyup(function() {
                    var rex = new RegExp($(this).val(), 'i');
                  $('.searchable tr').hide();
                  $('.searchable tr').filter(function() {
                      return rex.test($(this).text());
                  }).show();
              });*/

            $('#fooBtn').on('click', function (ev) {
                _this2.model.items = [{
                    "pagina": "dsasdgdasg",
                    "id": "92766634P",
                    "originLang": "EN",
                    "destLang": "POR",
                    "state": "PPendiente trad.",
                    "priority": "TOP",
                    "inCharge": "Paul",
                    "initialDate": "05/01/16"
                }];
                $('#table').bootstrapTable('load', _this2.model.items);
            });
        }
    }, {
        key: 'drawTables',
        value: function drawTables(resp) {
            /*for (var i = 0; i < resp.items.length; i++) {
                let tmp = '<tr data-toggle="collapse" data-target="#accordion' + i + '" class="clickable">';
                tmp += this.parseObj(resp.items[i], i);
                tmp += '</tr><tr><td colspan="3"><div id="accordion' + i + '" class="collapse">Detalle ' + i + '</div></td></tr>';
                this.wrap.find('#translations-list-cont').append(tmp);
            }
            */
            $('#table').bootstrapTable({
                data: this.model.items,
                search: true,
                searchAlign: 'left',
                onClickRow: function onClickRow(item, $element) {
                    alert(item);
                },
                columns: [{
                    field: 'pagina',
                    title: 'Página',
                    sortable: true
                }, {
                    field: 'id',
                    title: 'Id',
                    sortable: true
                }, {
                    field: 'originLang',
                    title: 'Idioma origen',
                    sortable: true
                }, {
                    field: 'destLang',
                    title: 'Idioma destino',
                    sortable: true
                }, {
                    field: 'state',
                    title: 'Estado',
                    sortable: true
                }, {
                    field: 'priority',
                    title: 'Prioridad',
                    sortable: true
                }, {
                    field: 'inCharge',
                    title: 'Responsable',
                    sortable: true,
                    formatter: function formatter(value, row, index) {
                        return '<input name="elementname"  value="' + value + '"/>';
                    }
                }, {
                    field: 'initialDate',
                    title: 'Fecha Inicio',
                    sortable: true
                }]
            });

            //DataBind.bind(this.wrap, resp);
            this.run();
        }
    }, {
        key: 'parseObj',
        value: function parseObj(obj, num) {
            var tmp = '';
            $.each(obj, function (key) {
                tmp += '<td data-key="items[' + num + '].' + key + '"></td>';
            });
            return tmp;
        }
    }]);

    return TransationsList;
})();

exports.TransationsList = TransationsList;

var HistoricalPage = function HistoricalPage(container) {
    var _this3 = this;

    _classCallCheck(this, HistoricalPage);

    this.container = container;
    console.log('Historial ha sido instanciado dentro de ', container);

    $('.btnExport').click(function (e) {
        var a = document.createElement('a');
        var dataType = 'data:application/vnd.ms-excel';
        var tableHtml = _this3.container[0].outerHTML.replace(/ /g, '%20');
        a.href = dataType + ', ' + tableHtml;
        a.download = 'historical' + '.xls';
        a.click();
        e.preventDefault();
    });
}

/*jshint unused:false*/
;

exports.HistoricalPage = HistoricalPage;

var ConfigEnterprises = function ConfigEnterprises(container) {
    _classCallCheck(this, ConfigEnterprises);

    console.log('config instanciado');
};

exports.ConfigEnterprises = ConfigEnterprises;

var SelectLanguages = (function () {
    function SelectLanguages(container) {
        var _this4 = this;

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
                _this4.deleteLang($(ev.target).attr('data-ind'));
            });
        });

        $('#confirmAddLanguageBtn').on('click', function (ev) {
            _this4.addLang();
        });

        DataBind.bind(this.wrap, this.languajesProvidersModel);
        console.log('SelectLanguages instanciado');
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

},{"../modules/translateAPI":3}]},{},[1]);
