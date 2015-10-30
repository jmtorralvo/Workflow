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

    static getItems() {
        /* let req = new AjaxRequest(); 
         return req.get(obj);*/
        return super.get({
            url: './mocks/list-trad.json'
        });
    }

    static getItemsByUserId(userId) {
        /* return super.get({
             url: './mocks/posible-in-charge.json'
         });*/
    }

    static getLanguageInCharge() {
        return super.get({
            url: './mocks/language-inCharge-array.json'
        });
    }


    static getLanguages() {
        return super.get({
            url: './mocks/languages-array.json'
        });
    }

    static changePersonInCharge(par) {
        /*return super.put({
            url: './mocks/posible-in-charge.json',
            params: 
        });*/
    }
}

