'use strict';

var PreviewView = Backbone.View.extend({
	className: 'editableForm',

	template: _.template(templates.preview),

	events: {
		'click .edit': 'startEditMode',
		'click .save': 'saveModel'
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	},

	startEditMode: function() {
		mediator.publish('changeMode', {model: this.model, mode: 'editMode'});
	},

	saveModel: function () {
		mediator.publish('modelSaved');
	}
});