'use strict';

export class WorkflowNavbar {
    constructor(elem) {

        this.elem = elem;
        
        $(elem).find('li').on('click', (ev) => {
        	//console.log('ev - navbar', ev);
        	$(ev.currentTarget).trigger('CHANGE_SEC');
        });
        
    }
}
