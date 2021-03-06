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
        let a = new Date();
        this.model = undefined;
        const wrap = $('#wrap-listado-traducciones');

        TranslateAPI.getTranslationItems().then((resp) => {
            this.model = resp;
            this.drawTables(this.model);
            this.configEvents();
        });
    }

    configEvents() {
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
                    sortable: true,
                    formatter: (value) => {
                        return Utils.getState(value);
                    }
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
                    sortable: true,
                    formatter: (value) => {
                        return Utils.formatDate(value);
                    }
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

        $('.btn-publish').on('click', (ev) => {
            this.publishTranslate(ev.currentTarget.attributes['data-id'].value);
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

    drawTables(resp) {
        $('#translate-table').bootstrapTable({
            data: resp.items,
            search: false,
            onClickCell: (field, value, row, element) => {
                if (field !== 'inCharge' && field !== 'currentState') {
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
                sortable: true,
                formatter: (value) => {
                    return Utils.getState(value);
                }
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
                sortable: true,
                formatter: (value, row, index) => {
                    return Utils.formatDate(value);
                }
            }, {
                field: 'currentState',
                title: 'Publicar',
                formatter: (value, row, index) => {
                    let tmp = (value === 2) ? '<button type="button" id="publish-btn-' + index + '" class="btn btn-primary btn-publish" data-id="'+row.id+'">Aceptar</button>' : '<button title="Aún no está traducido y no puede ser publicado" disabled type="button" class="btn btn-primary btn-publish data-id='+row.id+'">Aceptar</button>';
                    return tmp;
                }
            }]
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
                title: 'Estado',
                formatter: (value) => {
                    return Utils.getState(value);
                }
            }, {
                field: 'priority',
                title: 'Prioridad',
                formatter: (value, row, index) => {
                    return Utils.getPriorityLabel(value);
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
                formatter: (value, row, index) => {
                    return Utils.formatDate(value);
                }
            }, {
                field: 'finalDate',
                title: 'Fecha final',
                formatter: (value, row, index) => {
                    return Utils.formatDate(value);
                }
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

    publishTranslate(id){
        console.log('publicar traducción '+ id);
    }
}



export class ConfigInCharge {
    constructor(container) {
        this.container = container;
        this.languagesLinkedInCharge = [];
        this.posibleLanguages = [];

        TranslateAPI.getLanguageInCharge().then((resp) => {
            this.languagesLinkedInCharge = resp;
            this.renderLanguages(this.languagesLinkedInCharge);
            this.configEvents();
        });

    }

    configEvents() {
        $('#add-inCharge-btn').on('click', (ev) => {
            TranslateAPI.getAllLanguages().then((resp) => {
                this.posibleLanguages = resp;
                Utils.populateSelect(resp, $('#add-language-modal').find('.language-select'), 'languageName');
                $('#add-language-modal').find('#email-inCharge-modal').val('');
                $('#add-language-modal').modal('show');
            });
        });

        $('#accept-adding-language-btn').on('click', (ev) => {
            if (Utils.validateEmail($('#email-inCharge-modal').val()) === true) {
                let objToPost = {
                    id: $('#add-language-modal').find('.language-select').val(),
                    inCharge: $('#add-language-modal').find('#email-inCharge-modal').val()
                };
                this.postNewRow(objToPost);
            } else {
                $('#add-language-modal').find('.alert-msg').animate({
                    opacity: 1
                }, 1, () => {
                    setTimeout(() => {
                        $('#add-language-modal').find('.alert-msg').css('opacity', 0);
                    }, 4000);
                });
            }
        });
    }

    //SRV
    renderLanguages(array) {
        let count = 0;
        $('#add-language-modal').modal('hide');
        $('.container-manage-select').find('form').empty();

        const drawLanguagesIncharge = (obj) => {
            $('.container-manage-select').find('.row-language').last().attr('row-id', obj.id);
            $('.container-manage-select').find('.language-title').last().html(obj.language.languageName);
            $('.container-manage-select').find('input').last().val(obj.inCharge);
        };

        const iteratorToDrawRows = () => {
            $('.container-manage-select').find('form').append($('<div class="row row-language">')
                .load('templates/idioma-responsable.html', (tmpl, status) => {
                    if (status === 'success') {
                        if (count === array.length - 1) {
                            drawLanguagesIncharge(array[count]);
                            this.setEventToCustomBtns(array);
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

    postNewRow(obj) {
        TranslateAPI.addLanguageAndPersonInCharge(obj).then((resp) => {
            TranslateAPI.getLanguageInCharge().then((resp) => {
                this.languagesLinkedInCharge = resp;
                this.renderLanguages(this.languagesLinkedInCharge);
            });
        });
    }

    setEventToCustomBtns(array) {
        $('custom-btn').each((index, el) => {
            $(el).on('DELETE_LANGUAGE', (ev) => {
                this.deleteLang(array[index]);
            });
        });
    }

    deleteLang(obj) {
        console.log('delete', obj.id);
    }
}



export class ConfigProviders {
    constructor(container) {
        this.container = container;
        this.providersLinkedInCharge = [];
        this.posibleProviders = [];
        this.posibleLanguages = [];

        TranslateAPI.getAllProviders().then((respProv) => {
            this.posibleProviders = respProv;

            TranslateAPI.getProvidersInCharge().then((resp) => {
                this.providersLinkedInCharge = resp;
                this.renderProviders(this.providersLinkedInCharge);
                this.configEvents();
            });
        });
    }

    configEvents() {
        $('#add-provider-btn').on('click', (ev) => {
            this.openModal();
        });

        $('#accept-adding-provider-btn').on('click', (ev) => {
            let objToPost = {
                id: $('#add-provider-modal').find('.language-select').val(),
                inCharge: $('#add-provider-modal').find('.provider-select').val()
            };
            console.log('objToPost', objToPost);
            this.postNewRow(objToPost);
        });
    }

    openModal() {
        TranslateAPI.getAllProviders().then((respProv) => {
            this.posibleProviders = respProv;
            Utils.populateSelect(respProv, $('#add-provider-modal').find('.provider-select'), 'providerName');

            TranslateAPI.getAllLanguages().then((respLang) => {
                this.posibleLanguages = respLang;
                Utils.populateSelect(respLang, $('#add-provider-modal').find('.language-select'), 'languageName');
                $('#add-provider-modal').modal('show');
            });
        });
    }


    //SRV
    renderProviders(array) {
        let count = 0;
        $('#add-provider-modal').modal('hide');
        $('.container-manage-select').find('form').empty();

        const drawLanguagesIncharge = (obj) => {
            let inp = $('.container-manage-select').find('input').last(),
                sel = $('.container-manage-select').find('.provider-select').last(),
                tit = $('.container-manage-select').find('.language-title').last(),
                row = $('.container-manage-select').find('.row-language').last(),
                wrapConfirm = $('.container-manage-select').find('.wrap-btns-confirm');

            wrapConfirm.hide();
            row.attr('row-id', obj.id);
            tit.html(obj.language.languageName);
            inp.val(obj.provider.providerName);
            sel.hide();
            Utils.populateSelect(this.posibleProviders, sel, 'providerName');
            sel.val(obj.provider.id);
        };

        const iteratorToDrawRows = () => {
            $('.container-manage-select').find('form').append($('<div class="row row-language">')
                .load('templates/idioma-proveedor.html', (tmpl, status) => {
                    if (status === 'success') {
                        if (count === array.length - 1) {
                            drawLanguagesIncharge(array[count]);
                            this.setEventToCustomBtns(array);
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


    setEventToCustomBtns(array) {
        $('.btn-delete').each((index, el) => {
            $(el).on('DELETE_PROVIDER', (ev) => {
                this.deleteLang(array[index]);
            });
        });

        $('.btn-modify').each((index, el) => {
            $(el).on('MODIFY_PROVIDER', (ev) => {
                let row = $('.row-language[row-id="' + array[index].id + '"]');
                this.showConfirm(row, true);
            });
        });

        $('.btn-acept').each((index, el) => {
            $(el).on('ACEPT_CHANGE_PROVIDER', (ev) => {
                let row = $('.row-language[row-id="' + array[index].id + '"]');
                this.changeProviderRow(array[index], row);
            });
        });

        $('.btn-cancel').each((index, el) => {
            $(el).on('CANCEL_CHANGE_PROVIDER', (ev) => {
                let row = $('.row-language[row-id="' + array[index].id + '"]');
                row.find('.provider-select').val(array[index].provider.id);
                this.showConfirm(row, false);
            });
        });
    }

    changeProviderRow(obj, row) {
        row.find('.wrap-btns-confirm').find('button').prop('disabled', 'true');
        if (obj.provider.id === row.find('.provider-select').val()) {
            this.showConfirm(row, false);
            row.find('.wrap-btns-confirm').find('button').prop('disabled', 'false');
        } else {
            TranslateAPI.modifyProvider(obj).then((respMod) => {
                TranslateAPI.getProvidersInCharge().then((resp) => {
                    this.providersLinkedInCharge = resp;
                    this.showConfirm(row, false);
                    this.renderProviders(this.providersLinkedInCharge);
                });
            });
        }
    }

    deleteLang(obj) {
        TranslateAPI.deleteLangProvider(obj).then((respDel) => {
            TranslateAPI.getProvidersInCharge().then((resp) => {
                this.providersLinkedInCharge = resp;
                this.renderProviders(this.providersLinkedInCharge);
            });
        });
    }

    postNewRow(obj) {
        TranslateAPI.addProvider(obj).then((respPost) => {
            TranslateAPI.getProvidersInCharge().then((resp) => {
                this.providersLinkedInCharge = resp;
                this.renderProviders(this.providersLinkedInCharge);
            });
        });
    }

    showConfirm(row, sense) {
        if (sense === true) {
            row.find('.provider-select').show();
            row.find('input').hide();
            row.find('.wrap-btns-primary').animate({
                opacity: 0
            }, 0.4, () => {
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
            }, 0.4, () => {
                row.find('.wrap-btns-confirm').hide();
                row.find('.wrap-btns-primary').css('opacity', 0);
                row.find('.wrap-btns-primary').show();
                row.find('.wrap-btns-primary').animate({
                    opacity: 1
                }, 0.4);
            });
        }
    }
}
