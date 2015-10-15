/*exported runtime */

import * as runtime from './modules/runtime';
import * as utils from './modules/utils';
/// Classes
import {AjaxRequest} from './modules/ajaxRequest';
import {TranslateAPI} from './modules/translateAPI';




new AjaxRequest();
new TranslateAPI();

console.log(utils);
