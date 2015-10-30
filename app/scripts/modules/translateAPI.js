/*exported TranslateAPI */

'use strict';

import {
    AjaxRequest
}
from './ajaxRequest';


export class TranslateAPI extends AjaxRequest {
    constructor() {
        super();
    }

    static getTranslationItems() {
        /* let req = new AjaxRequest(); 
         return req.get(obj);*/
        return super.get({
            url: './mocks/list-trad.json'
        });
    }

    static getTranslationItemByUserId(userId) {
        /* return super.get({
             url: './mocks/posible-in-charge.json'
         });*/
    }

    static getLanguageInCharge() {
        return super.get({
            url: './mocks/language-inCharge-array.json'
        });
    }


    static getAllLanguages() {
        return super.get({
            url: './mocks/languages-array.json'
        });
    }

    static addLanguageAndPersonInCharge(obj){
        return super.post({
            url: './API/addLanguageAndPersonInCharge',
            params : obj
        });
    }

    static changePersonInCharge(par) {
        /*return super.put({
            url: './mocks/posible-in-charge.json',
            params: 
        });*/
    }
}

