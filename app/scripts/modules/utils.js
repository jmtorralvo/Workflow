'use strict';

export class Utils {
    constructor() {

    }

    // EXCELLL
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


    //// DATE
    static formatDate(time) {
        let date = new Date(time),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;

        return  date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear();
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


    /// LITERALES
    static getPriorityLabel(num) {
        let labels = ['Baja', 'Media', 'Alta'];
        return labels[num];
    }

    static getState(num){
     let labels = ['Pendiente de traducción', 'Pendiente de aprobación', 'Aprobado'];
        return labels[num];
    }


    /// MANAGE SELECTS
    static populateSelect(array, elem, propName) {
        elem.empty();
        for (var i = 0; i < array.length; i++) {
            let opt = document.createElement('option');
            opt.innerHTML = array[i][propName];
            opt.value = array[i].id;
            elem[0].appendChild(opt);
        }
    }


    ///VALIDATIONS
    static validateEmail(email) {
        let re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    }
}
