'use strict';

export class Utils {
    constructor() {

    }

    static isOdd(num) {
        let resp = null;
        resp = (num % 2 === 0) ? true : false;
        return resp;
    }

    static exportExcel(title, wrap, ev) {
        let a = document.createElement('a');
        let dataType = 'data:application/vnd.ms-excel';
        let tableHtml = wrap[0].outerHTML;
        a.href = dataType + ', ' + escape(tableHtml);
        a.download = title + '.xls';
        a.click();
        ev.preventDefault();
    }

    static getCurrentDate() {
        let currentTime = new Date();
        let day = currentTime.getDate();
        let month = currentTime.getMonth() + 1;
        let year = currentTime.getFullYear();

        day = (day < 10) ? '0'+day : day;
        month = (month < 10) ?  '0' + month : month;

        let todayDate = day + '/' + month + '/' + year;
        return todayDate.toString();
    }

    static getPriorityLabel(num) {
        let pLabels = ['Baja', 'Media', 'Alta'];
       return pLabels[num];
    }
}


