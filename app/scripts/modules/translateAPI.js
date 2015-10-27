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
    static getItems(obj) {
       /* let req = new AjaxRequest(); 
        return req.get(obj);*/
        return super.get(obj);
    }
}
 