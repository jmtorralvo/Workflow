'use strict';

export class HistoricalPage {
    constructor(container) {

 		this.container = container;
        console.log('Historial ha sido instanciado dentro de ', container);

        $('#btnExport').click(function(e) {
        	
            var a = document.createElement('a');
            //getting data from our div that contains the HTML table
            var data_type = 'data:application/vnd.ms-excel';
            var table_html = this.container[0].outerHTML.replace(/ /g, '%20');
            a.href = data_type + ', ' + table_html;
            //setting the file name
            a.download = 'historical' + '.xls';
            //triggering the function
            a.click();
            //just in case, prevent default behaviour
            e.preventDefault();
        });
    }
}

export class ConfigEnterprises {
    constructor(container) {

        alert('config instanciado');
    }
}


export class TaskList {
    constructor(container) {

        alert('TaskList instanciado');
    }
}


export class SelectLanguages {
    constructor(container) {

        alert('SelectLanguages instanciado');
    }

    foo(){
        alert('foo');
    }
}

