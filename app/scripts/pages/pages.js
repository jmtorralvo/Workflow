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
        const wrap = $('#wrap-listado-traducciones');

        TranslateAPI.getItems().then((resp) => {
            this.model = resp;
            this.drawTables(this.model);
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
                formatter: (value, row, index) => {
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
                formatter: (value, row, index) => {
                    return Utils.getPriorityLabel(value);
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

    init() {
        /// Event Export
        $('.btnExport').on('click', (ev) => {
            $('#translate-table-to-export').bootstrapTable({
                data: this.model.items,
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
                    formatter: (value, row, index) => {
                        return Utils.getPriorityLabel(value);
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
            Utils.exportExcel('Listado traducciones ' + Utils.getCurrentDate(), [$('#wrap-table-to-export')],
                ev,
                null);
        });

        $('.btnExport-modal').on('click', (ev) => {
            Utils.exportExcel('Listado detalle traducciones ' + Utils.getCurrentDate(), [$('#translate-table-detail'), $('#translate-table-historical'), $('#translate-table-comments')],
                ev,
                '<div class="row margin-bottom-lg"><div class="col-xs-12"><h2>Detalle Traducción</h2></div></div>');
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

        $('#translate-modal-details').find('.modal-title').html('Detalle ' + row.page + ' por ' + row.demandBy);

        $('#translate-table-detail').bootstrapTable({
            data: [row],
            search: false,
            columns: [{
                field: 'uri',
                title: 'Código URI',
                formatter: (value, row, index) => {
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
                formatter: (value, row, index) => {
                    return Utils.getPriorityLabel(value);
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

    render() {
        $('select option:selected').each((index, val) => {
            this.model.items[index].inCharge = val.value;
        });
        $('#translate-table').bootstrapTable('load', this.model.items);
        //DataBind.bind(wrap, this.model.items);
    }
}


export class ConfigInCharge {
    constructor(container) {
        this.container = container;
        this.languagesLinkedInCharge = [];
        this.posibleLanguages = [];

        TranslateAPI.getLanguageInCharge().then((resp) => {
            this.languagesLinkedInCharge = resp;
            this.addLanguage(this.languagesLinkedInCharge);
            this.init();
        }, (error) => {
            console.log('Imposible cargar datos ', error);
        });
    }

    init() {
    
        //Events
        $('#add-inCharge-btn').on('click', (ev) => {
            TranslateAPI.getLanguages().then((resp) => {
                this.posibleLanguages = resp;
                Utils.populateLanguageSelect(resp, $('#add-language-modal').find('select'));
                $('#add-language-modal').modal('show');
            }, (error) => {
                //console.log('Imposible cargar datos ', error)
            });
        });

        $('#accept-adding-language-btn').on('click', (ev) => {
            TranslateAPI.getLanguageInCharge().then((resp) => {
                this.languagesLinkedInCharge = resp;
                this.addLanguage(this.languagesLinkedInCharge);
            }, (error) => {
                //console.log('Imposible cargar datos ', error)
            });
        });
    }

    addLanguage(array) {
        let count = 0;
        $('.container-manage-select').find('form').empty();

        const iteratorToDrawRows = () => {
            $('.container-manage-select').find('form').append($('<div class="row row-language">')
                .load('templates/idioma-responsable.html', (tmpl, status) => {
                    if (status === 'success') {
                        if (count === array.length - 1) {
                            this.drawLanguagesIncharge(array[count]);
                            return;
                        } else {
                            this.drawLanguagesIncharge(array[count]);
                            count++;
                            iteratorToDrawRows();
                        }
                    }
                }));
        };

        iteratorToDrawRows();
    }

    drawLanguagesIncharge(obj) {
        let str = obj.language.languageName;
        $('.container-manage-select').find('.language-title').last().html(str);
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
    }

    addLang() {
        console.log('Añadimos un idioma');
        $('#addLangModal').modal('hide');
    }
}

/*jshint unused:true*/
