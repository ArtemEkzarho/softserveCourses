'use strict';

function TableController (group, $tableWrap, $editableForm) {
    var tableView = new TableView($tableWrap, group.toArray());

    mediator.subscribe('showEditView', function (data) {
		var editview = new EditView($editableForm, data);
    });

    mediator.subscribe('showPreviewView', function (data) {
    	var preview = new PreviewView($editableForm, data);
    });

    return this;
};