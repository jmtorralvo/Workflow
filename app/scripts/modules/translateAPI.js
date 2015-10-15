/*exported TranslateAPI */
/*global AjaxRequest */

'use strict';

import {
    AjaxRequest
}
from './ajaxRequest';


export class TranslateAPI extends AjaxRequest {
    constructor() {
        super();
    }
    getItems(obj) {
        return super.get(obj);
    }

    getItem(id) {
        /// params?
        return super.get({
            id: id
        });
    }

    sendToTranslate(obj) {
        return super.post(obj);
    }
}
