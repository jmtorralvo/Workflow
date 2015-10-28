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

    static getPosibleInCharge() {
        return super.get({
            url: './mocks/posible-in-charge.json'
        });
    }

    static changePersonInCharge(par) {
        /*return super.put({
            url: './mocks/posible-in-charge.json',
            params: 
        });*/
    }
}
