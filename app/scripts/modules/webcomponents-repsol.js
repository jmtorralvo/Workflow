export class DeleteLangBtn extends HTMLElement {
    // Fires when an instance of the element is created.
    createdCallback() {
        $(this).append( '<button type="button" class="btn btn-primary">Eliminar idioma</button>' );
        //this.textContent = 'Eliminar Idioma';
        $(this).on('click', (ev) => {
            $(this).trigger('DELETE_LANGUAGE');
            ev.preventDefault();
        });
    }
    // Fires when an instance was inserted into the document.
    attachedCallback() {}
    // Fires when an instance was removed from the document.
    detachedCallback() {}
    // Fires when an attribute was added, removed, or updated.
    /*jshint unused:true*/
    attributeChangedCallback(attr, oldVal, newVal) {}
    /*jshint unused:false*/
}
document.registerElement('delete-lang-btn', DeleteLangBtn);