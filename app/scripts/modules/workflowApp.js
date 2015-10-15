/*exported WorkflowNavbar */
import {WorkflowNavbar} from './workflowNavbar';

export class WorkflowApp {
    constructor(elem, navbar) {
        this.elem = elem;
        this.navbar = navbar;
        this.state = 'home';
    }

    init() {
        console.log('init');
        this.config();
    }

    config() {
        console.log('config');
    }

    changeState(newState){
        this.state = newState;
        this.elem.load('sections/'+newState+'.html', function(name,status) {
            
        });
    }

    getState(){
        return this.state;
    }
}
