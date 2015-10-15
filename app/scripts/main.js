/*exported runtime */

import * as runtime from './modules/runtime';
import * as utils from './modules/utils';
/// Classes
import {AjaxRequest} from './modules/ajaxRequest';
import {TranslateAPI, ColorPoint} from './modules/translateAPI';
import {WorkflowApp} from './modules/workflowApp';



var app = new WorkflowApp($('#section-view'));