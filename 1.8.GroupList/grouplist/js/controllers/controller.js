'use strict';

function Controller (students) {
	var $placeTable = $('#students tbody'),
        $placeForm = $('#editableForm'),
		tableView = new TableView($placeTable, students);

    mediator.subscribe('showEditView', function (data) {
        var editView = new EditView($placeForm, data);
    });

    mediator.subscribe('showPreviewView', function (data) {
        var previewView = new PreviewView($placeForm, data);
    });

    return this;
}