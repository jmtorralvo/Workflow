/*exported runtime, TranslateAPI, Utils, app */

'use strict';

import {Utils} from './modules/utils';
/// Classes
import {TranslateAPI} from './modules/translateAPI';
import {WorkflowApp} from './modules/workflowApp';

var app = new WorkflowApp($('#section-view'), $('#workflow-navbar'));


/*var myModel = {};
DataBind.bind($('#section-view'), myModel);*/
 