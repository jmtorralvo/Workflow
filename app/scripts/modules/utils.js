'use strict';

export class Utils {
    constructor() {

    }

    static isOdd(num) {
        let resp = null;
        resp = (num % 2 === 0) ? true : false;
        return resp;
    }

    static exportExcel(filename, wrapArray, ev, headerTemplate) {
        let a = document.createElement('a'),
            dataType = 'data:application/vnd.ms-excel',
            tableHtml = (headerTemplate) ? headerTemplate : '';
        for (var i = 0; i < wrapArray.length; i++) {
            tableHtml += wrapArray[i][0].outerHTML;
            tableHtml += '<table id="translate-table-comments"><tbody><tr></tr><tr><td class="comments">-----------------------------<br></td></tr></tbody></table>';
        }
        a.href = dataType + ', ' + escape(tableHtml);
        a.download = filename + '.xls';
        a.click();
        ev.preventDefault();
    }

    static getCurrentDate() {
        let currentTime = new Date(),
            day = currentTime.getDate(),
            month = currentTime.getMonth() + 1,
            year = currentTime.getFullYear();

        day = (day < 10) ? '0' + day : day;
        month = (month < 10) ? '0' + month : month;

        let todayDate = day + '/' + month + '/' + year;
        return todayDate.toString();
    }

    static getPriorityLabel(num) {
        let pLabels = ['Baja', 'Media', 'Alta'];
        return pLabels[num];
    }

    static populateLanguageSelect(array, elem) {
        elem.empty();
        for (var i = 0; i < array.length; i++) {
            let opt = document.createElement('option');
            opt.innerHTML = array[i].languageName;
            opt.value = array[i].id;
            elem[0].appendChild(opt);
        }
    }

    static validateEmail(email) {
        let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }

    static getLangNameById(array, id){
        
    }

    static getIdLangByName(array, name){

    }
}
