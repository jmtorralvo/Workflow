/*exported TranslateAPI */
/*global AjaxRequest */

class TranslateAPI {
    constructor() {
        const req = new AjaxRequest();

        this.getItems = getItems; 
        this.getItem = getItem; 
        this.sendToTranslate = sendToTranslate;

       
        function getItems(obj) {
            return req.get(obj);
        }

        function getItem(id){
        	/// params?
        	return req.get({id:id});
        }

        function sendToTranslate(obj) {
            return req.post(obj);
        }
    }
} 
