(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*exported runtime, utils, TranslateAPI, DataBind */

'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _modulesUtils = require('./modules/utils');

var utils = _interopRequireWildcard(_modulesUtils);

/// Classes

var _modulesTranslateAPI = require('./modules/translateAPI');

var _modulesWorkflowApp = require('./modules/workflowApp');

var app = new _modulesWorkflowApp.WorkflowApp($('#section-view'), $('#workflow-navbar'));
app.config();

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

        console.log('ajaxReq');
    }

    _createClass(AjaxRequest, [{
        key: 'get',
        value: function get(config) {
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

    _createClass(TranslateAPI, [{
        key: 'getItems',
        value: function getItems(obj) {
            return _get(Object.getPrototypeOf(TranslateAPI.prototype), 'get', this).call(this, obj);
        }
    }, {
        key: 'getItem',
        value: function getItem(id) {
            /// params?
            return _get(Object.getPrototypeOf(TranslateAPI.prototype), 'get', this).call(this, {
                id: id
            });
        }
    }, {
        key: 'sendToTranslate',
        value: function sendToTranslate(obj) {
            return _get(Object.getPrototypeOf(TranslateAPI.prototype), 'post', this).call(this, obj);
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
exports.sum = sum;
exports.odd = odd;

function sum(x, y) {
  return x + y;
}

function odd(num) {
  var resp = null;
  resp = num % 2 === 0 ? true : false;
  return resp;
}

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
        key: 'init',
        value: function init() {
            this.config();
        }
    }, {
        key: 'config',
        value: function config() {}
    }, {
        key: 'changeState',
        value: function changeState(newState) {
            var self = this;
            this.state = newState;
            /*jshint unused:false*/
            this.elem.load('sections/' + newState + '.html', function (tmpl, status) {
                if (status === 'success') {
                    self.currentSec = null;
                    self.instanceSec(newState);
                }
            });
            /*jshint unused:true*/
        }
    }, {
        key: 'instanceSec',
        value: function instanceSec(newState) {

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
            if (newState === 'task-list') {
                this.currentSec = new pages.TaskList($('#section-view'));
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

var HistoricalPage = function HistoricalPage(container) {
    var _this = this;

    _classCallCheck(this, HistoricalPage);

    this.container = container;
    console.log('Historial ha sido instanciado dentro de ', container);

    $('#btnExport').click(function (e) {

        var a = document.createElement('a');
        //getting data from our div that contains the HTML table
        var dataType = 'data:application/vnd.ms-excel';
        var tableHtml = _this.container[0].outerHTML.replace(/ /g, '%20');
        a.href = dataType + ', ' + tableHtml;
        //setting the file name
        a.download = 'historical' + '.xls';
        //triggering the function
        a.click();
        //just in case, prevent default behaviour
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

var TaskList = function TaskList(container) {
    _classCallCheck(this, TaskList);

    console.log('TaskList instanciado');
};

exports.TaskList = TaskList;

var SelectLanguages = (function () {
    function SelectLanguages(container) {
        var _this2 = this;

        _classCallCheck(this, SelectLanguages);

        //http://codepen.io/grnadav/pen/ptJKg?editors=101
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
                _this2.deleteLang($(ev.target).attr('data-ind'));
            });
        });

        $('#confirmAddLanguageBtn').on('click', function (ev) {
            _this2.addLang();
        });

        DataBind.bind($('#wrap-select-idioma-empresa'), this.languajesProvidersModel);
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
    }], [{
        key: 'foo',
        value: function foo() {
            console.log('foo');
        }
    }]);

    return SelectLanguages;
})();

exports.SelectLanguages = SelectLanguages;

},{}]},{},[1]);
