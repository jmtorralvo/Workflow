'use strict';

export class Utils {
    constructor() {

    }

    static odd(num) {
        let resp = null;
        resp = (num % 2 === 0) ? true : false;
        return resp;
    }
}
