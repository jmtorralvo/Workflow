/*exported runtime, utils, TranslateAPI */

import * as runtime from './modules/runtime';
import * as utils from './modules/utils';
/// Classes
import {TranslateAPI} from './modules/translateAPI';
import {WorkflowApp} from './modules/workflowApp';


var app = new WorkflowApp($('#section-view'), $('#workflow-navbar'));
app.config();


var myModel = {};

DataBind.bind($('#section-view'), myModel);