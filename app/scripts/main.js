/*exported runtime, utils, TranslateAPI, DataBind */

'use strict';

import {Utils} from './modules/utils';
/// Classes
import {TranslateAPI} from './modules/translateAPI';
import {WorkflowApp} from './modules/workflowApp';

var app = new WorkflowApp($('#section-view'), $('#workflow-navbar'));


console.log('4 is odd? ' + Utils.odd(4));

/*var myModel = {};
DataBind.bind($('#section-view'), myModel);*/
