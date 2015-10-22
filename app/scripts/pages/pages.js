'use strict';

export class HistoricalPage {
    constructor(container) {

        this.container = container;
        console.log('Historial ha sido instanciado dentro de ', container);

        $('#btnExport').click((e) => {

            var a = document.createElement('a');
            //getting data from our div that contains the HTML table
            var dataType = 'data:application/vnd.ms-excel';
            var tableHtml = this.container[0].outerHTML.replace(/ /g, '%20');
            a.href = dataType + ', ' + tableHtml;
            //setting the file name
            a.download = 'historical' + '.xls'; 
            //triggering the function
            a.click();
            //just in case, prevent default behaviour
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


export class TaskList {
    constructor(container) {

        console.log('TaskList instanciado');
    }
}


export class SelectLanguages {
    constructor(container) {
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

        DataBind.bind($('#wrap-select-idioma-empresa'), this.languajesProvidersModel);
        console.log('SelectLanguages instanciado');
    }

    static foo() {
        console.log('foo');
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
