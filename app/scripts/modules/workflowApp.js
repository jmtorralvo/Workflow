/*exported WorkflowNavbar, webComponents */

'use strict';

import {
    WorkflowNavbar
}
from './workflowNavbar';
import * as pages from '../pages/pages';
import * as webComponents from './webcomponents-repsol';


export class WorkflowApp {
    constructor(elem, navbar) {
        this.elem = elem;
        this.navbar = new WorkflowNavbar(navbar);
        this.state = 'home';
        this.currentSec = 'empty';


        navbar.on('CHANGE_SEC', (ev) => {
            let dest = ($(ev.target).find('a').attr('href')).replace('#', '');
            this.changeState(dest);
        });


/*        elem.tooltip({
            items: '[data-tt]',
            content: function() {
                var element = $(this);
                if (element.is('[data-tt]')) {
                    return element.attr("tt");
                }
            }
        });*/

    }

    changeState(newState) {
        this.state = newState;
        /*jshint unused:false*/
        this.elem.load('sections/' + newState + '.html', (tmpl, status) => {
            if (status === 'success') {
                this.currentSec = null;
                this.instanceSec(newState);
            }
        });
        /*jshint unused:true*/
    }


    instanceSec(newState) {
        if (newState === 'listado-traducciones') {
            this.currentSec = new pages.TransationsList();
        }
        if (newState === 'configurar-responsables') {
            this.currentSec = new pages.ConfigInCharge($('#section-view'));
        }
        if (newState === 'config-proveedores') {
            this.currentSec = new pages.ConfigProviders($('#section-view'));
        }
    }

    getState() {
        return this.state;
    }
}
