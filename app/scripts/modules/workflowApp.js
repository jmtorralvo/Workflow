/*exported WorkflowNavbar, webComponents */

'use strict';

import {WorkflowNavbar} from './workflowNavbar';
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
    }

    changeState(newState) {
        this.state = newState;
        /*jshint unused:false*/
        this.elem.load('sections/' + newState + '.html', (tmpl, status) => {
            if (status === 'success'){
                this.currentSec = null;
                this.instanceSec(newState);
            }    
        });
        /*jshint unused:true*/
    }


    instanceSec(newState){
        if (newState === 'listado-traducciones'){
            this.currentSec = new pages.TransationsList(); 
        }
         if (newState === 'configurar-responsables'){
            this.currentSec = new pages.ConfigInCharge($('#section-view'));
        }
        if (newState === 'config-empresas'){
            this.currentSec = new pages.ConfigEnterprises($('#section-view'));
        }
        if (newState === 'select-idioma-empresa'){
            this.currentSec = new pages.SelectLanguages($('#section-view'));
            //this.currentSec.deleteLang(1);
            //pages.SelectLanguages.foo();
        }
    }

    getState() {
        return this.state;
    }
}
