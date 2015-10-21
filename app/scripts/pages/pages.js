

'use strict';

export class HistoricalPage {
    constructor(container) {

 		this.container = container;
        console.log('Historial ha sido instanciado dentro de ', container);

        $('#btnExport').click(function(e) {
        	
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

        console.log('SelectLanguages instanciado');
    }

    foo(){
        console.log('foo');
    }
}

/*jshint unused:true*/