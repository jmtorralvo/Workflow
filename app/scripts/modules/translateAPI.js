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
            url: './mocks/getJsons/list-trad.json'
        });
    }

    static getTranslationItemByUserId(userId) {
        /* return super.get({
             url: './mocks/posible-in-charge.json'
         });*/
    }

    static getLanguageInCharge() {
        return super.get({
            url: './mocks/getJsons/language-inCharge-array.json'
        });
    }

     static getProvidersInCharge() {
        return super.get({
            url: './mocks/getJsons/providers-inCharge-array.json'
        });
    }

    static getAllProviders() {
        return super.get({
            url: './mocks/getJsons/providers-array.json'
        });
    }

    static getAllLanguages() {
        return super.get({
            url: './mocks/getJsons/languages-array.json'
        });
    }

    static addLanguageAndPersonInCharge(obj) {
        return super.post({
            url: '/service/addLanguageAndPersonInCharge',
            data : obj
        });
    }

    static addProvider(obj) {
        return super.post({
            url: '/service/addProvider',
            data : obj
        });
    }

    static changePersonInCharge(par) {
        /*return super.put({
            url: './mocks/posible-in-charge.json',
            params: 
        });*/
    }
}

