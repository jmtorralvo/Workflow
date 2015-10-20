/*exported WorkflowNavbar */

'use strict';

import {WorkflowNavbar} from './workflowNavbar';
import * as pages from '../pages/pages'


export class WorkflowApp {
    constructor(elem, navbar) {
        const that = this;
        that.elem = elem; 
        this.navbar = new WorkflowNavbar(navbar); 
        this.state = 'home';
        this.currentSec = 'empty';


        navbar.on('CHANGE_SEC', (ev) => {
            let dest = ($(ev.target).find('a').attr('href')).replace('#', '');
            this.changeState(dest); 
        });
    }

    init() {
        this.config();
    }

    config() {

    }

    changeState(newState) {
        let self = this;
        this.state = newState;
        this.elem.load('sections/' + newState + '.html', function(tmpl, status) {
            self.currentSec = null;
            self.instanceSec(newState);
        })
    }

    instanceSec(newState){

        if (newState === 'config-empresas'){
            this.currentSec = new pages.ConfigEnterprises($('#section-view'));
        }
        if (newState === 'historical-list'){
            this.currentSec = new pages.HistoricalPage($('#section-view'));
        }
        if (newState === 'select-idioma-empresa'){
            this.currentSec = new pages.SelectLanguages($('#section-view'));
            //this.currentSec.foo();
        }
        if (newState === 'task-list'){
            this.currentSec = new pages.TaskList($('#section-view'));
        }
    }

    getState() {
        return this.state;
    }
}
