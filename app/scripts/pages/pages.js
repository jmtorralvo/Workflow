'use strict';

import {
    TranslateAPI
}
from '../modules/translateAPI';
import {
    Utils
}
from '../modules/utils';


export class TransationsList {
    constructor() {
        this.model = undefined;
        this.wrap = $('#wrap-listado-traducciones');
        this.posibleInCharge = [];

        TranslateAPI.getItems().then((resp) => {
            this.model = resp;
            TranslateAPI.getPosibleInCharge().then((resp) => {
                this.posibleInCharge = resp;
                this.drawTables(this.model);
            });
        });
    }

    drawTables(resp) {
        $('#translate-table').bootstrapTable({
            data: resp.items,
            search: false,
            onClickCell: (field, value, row, element) => {
                if (field !== 'inCharge') {
                    this.displayDetails(field, value, row, element);
                }
            },
            columns: [{
                field: 'id',
                title: 'Id'
            },{
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
                formatter: (value, row, index) => {
                    return '<a href="'+value+'" target="_blank">link</a>';
                }
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
                sortable: true,
                formatter: (value, row, index) => {
                    return Utils.getPriorityLabel(value);
                }
            },{
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

        /*
        ,
                formatter: (value, row, index) => {
                    let tmp = '<select class="select-in-charge">';
                    for (var i = 0; i < this.posibleInCharge.length; i++) {
                        if (this.posibleInCharge[i] === row.inCharge) {
                            tmp += '<option value="' + this.posibleInCharge[i] + '" selected>' + this.posibleInCharge[i] + '</option>';
                        } else {
                            tmp += '<option value="' + this.posibleInCharge[i] + '">' + this.posibleInCharge[i] + '</option>';
                        }
                    }
                    return tmp + '</select>';
                }
                */
    }

    init() {
        /// Event Export
        $('.btnExport').click((ev) => {

            $('#translate-table-to-export').bootstrapTable({
                data: this.model.items,
                search: false,
                onClickCell: (field, value, row, element) => {
                    if (field !== 'inCharge') {
                        this.displayDetails(field, value, row, element);
                    }
                },
                columns: [{
                    field: 'page',
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
                    sortable: true
                }, {
                    field: 'initialDate',
                    title: 'Fecha Inicio',
                    sortable: true,
                }]
            });

            $('#wrap-table-to-export').find('.fixed-table-loading').remove();
            Utils.exportExcel('Listado traducciones ' + Utils.getCurrentDate(), $('#wrap-table-to-export'), ev);
        });

        $('.btnExport-modal').click((ev) => {
            Utils.exportExcel('Listado detalle traducciones ' + Utils.getCurrentDate(), $('#translation-modal-details'), ev);
        });

        // Event change person in charge
        $('select').on('change', (ev) => {
            this.render();
        });


        //Filter
        $('#filter-translations').keyup(function() {
            let rex = new RegExp($(this).val(), 'i');
            $('.searchable tr').hide();
            $('.searchable tr').filter(function() {
                return rex.test($(this).text());
            }).show();
        });
    }

    displayDetails(field, value, row, element) {
        $('#translation-modal-details').find('.modal-title').html('Detalle ' + row.page + ' por ' + row.inCharge);

        $('#translate-table-detail').bootstrapTable({
            data: this.modal.items.detail,
            columns: [{
                field: 'page',
                title: 'Página'
            }, {
                field: 'id',
                title: 'Id'
            }, {
                field: 'originLang',
                title: 'Idioma origen'
            }, {
                field: 'destLang',
                title: 'Idioma destino'
            }, {
                field: 'state',
                title: 'Estado'
            }, {
                field: 'priority',
                title: 'Prioridad'
            }, {
                field: 'inCharge',
                title: 'Responsable'
            }, {
                field: 'initialDate',
                title: 'Fecha Inicio'
            }]
        });
        /* $('#translation-modal-details').find('.data-to-fill').empty();

         for (var i = 0; i < row.details.historical.length; i++) {
             let tmp = '<div class="col-xs-4" data-key="details.historical[' + i + '].task"></div>';
             tmp += '<div class="col-xs-4" data-key="details.historical[' + i + '].initDate"></div>';
             tmp += '<div class="col-xs-4" data-key="details.historical[' + i + '].finalDate"></div>';
             $('#translation-modal-details').find('.data-to-fill').append(tmp);
         }

         DataBind.bind($('#translation-modal-details'), row);*/
        $('#translation-modal-details').modal('show');
    }

    render() {
        $('select option:selected').each((index, val) => {
            this.model.items[index].inCharge = val.value;
        });
        $('#translate-table').bootstrapTable('load', this.model.items);
        //DataBind.bind(this.wrap, this.model.items);
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
