function validateForm(form) {		var activity = getValue('WKNumState');if ((form.getValue("teste") == null || form.getValue("teste") ==  "") && ( getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true') )) {throw "teste n\u00E3o pode ser vazio.";}}