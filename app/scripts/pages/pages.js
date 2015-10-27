'use strict';

import {
    TranslateAPI
}
from '../modules/translateAPI';


export class TransationsList {
    constructor() {
        this.model = undefined;
        this.wrap = $('#wrap-listado-traducciones');


        TranslateAPI.getItems({
            url: './mocks/list-trad.json'
        }).then((resp) => {
            this.model = resp;
            this.drawTables(resp);
        });
    }

    run() {
        $('.btnExport').click((e) => {
            var a = document.createElement('a');
            var dataType = 'data:application/vnd.ms-excel';
            var tableHtml = this.wrap[0].outerHTML.replace(/ /g, '%20');
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

        $('#fooBtn').on('click', (ev) => {
            this.model.items = [{
                "pagina": "dsasdgdasg",
                "id": "92766634P",
                "originLang": "EN",
                "destLang": "POR",
                "state": "PPendiente trad.",
                "priority": "TOP",
                "inCharge": "Paul",
                "initialDate": "05/01/16"
            }];
            $('#table').bootstrapTable('load', this.model.items);
        });
    }

    drawTables(resp) {
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
            onClickRow: function(item, $element) {
                alert(item);
            },
            columns: [{
                field: 'pagina',
                title: 'Página',
                sortable: true,
            }, {
                field: 'id',
                title: 'Id',
                sortable: true,
            }, {
                field: 'originLang',
                title: 'Idioma origen',
                sortable: true,
            }, {
                field: 'destLang',
                title: 'Idioma destino',
                sortable: true,
            }, {
                field: 'state',
                title: 'Estado',
                sortable: true,
            }, {
                field: 'priority',
                title: 'Prioridad',
                sortable: true,
            }, {
                field: 'inCharge',
                title: 'Responsable',
                sortable: true,
                formatter: function(value, row, index) {
                    return '<input name="elementname"  value="' + value + '"/>';
                }
            }, {
                field: 'initialDate',
                title: 'Fecha Inicio',
                sortable: true,
            }]
        });

        //DataBind.bind(this.wrap, resp);
        this.run();
    }

    parseObj(obj, num) {
        let tmp = '';
        $.each(obj, function(key) {
            tmp += '<td data-key="items[' + num + '].' + key + '"></td>';
        });
        return tmp;
    }
}

export class HistoricalPage {
    constructor(container) {

        this.container = container;
        console.log('Historial ha sido instanciado dentro de ', container);

        $('.btnExport').click((e) => {
            var a = document.createElement('a');
            var dataType = 'data:application/vnd.ms-excel';
            var tableHtml = this.container[0].outerHTML.replace(/ /g, '%20');
            a.href = dataType + ', ' + tableHtml;
            a.download = 'historical' + '.xls';
            a.click();
            e.preventDefault();
        });
    }
}

/*jshint unused:false*/
export class ConfigEnterprises {
    constructor(container) {
        console.log('config instanciado');
    }
}


export class SelectLanguages {
    constructor(container) {
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
            }, ]
        };

        /*$('#deleteLang').on('click', (ev, ind) => {
            console.log(ev, ind);
        })*/
        $('delete-lang-btn').each((index, el) => {
            $(el).on('DELETE_LANGUAGE', (ev) => {
                console.log('click', ev.target.attributes);
                this.deleteLang($(ev.target).attr('data-ind'));
            });
        });

        $('#confirmAddLanguageBtn').on('click', (ev) => {
            this.addLang();
        });

        DataBind.bind(this.wrap, this.languajesProvidersModel);
        console.log('SelectLanguages instanciado');
    }

    deleteLang(ind) {
        console.log('delete', ind);
        //console.log('delete '+ this.languajesProvidersModel.relations[ind]);
    }

    addLang() {
        console.log('Añadimos un idioma');
        $('#addLangModal').modal('hide');
    }
}

/*jshint unused:true*/
