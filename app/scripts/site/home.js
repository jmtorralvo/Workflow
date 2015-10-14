/*global ModulePrueba, TranslateAPI */ 

var mod, 
	transAPI; 

mod = new ModulePrueba();
transAPI = new TranslateAPI();  
transAPI.getItems({nombre:'nombre objeto'}); 

console.log('mod', mod);

