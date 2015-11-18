'use strict';

var EditView = Backbone.View.extend({
	className: 'editableForm',

	template: _.template(templates.edit),

	events: {
		'click .preview': 'startPreviewMode',
		'click .save': 'saveModel'
	},

	render: function () {
		this.$el.html(this.template(this.model.toJSON()));

		return this.$el;
	},

	startPreviewMode: function() {
		this.setArgumentsToModel();

		mediator.publish('changeMode', {model: this.model, mode: 'previewMode'});
	},

	saveModel: function () {
		this.setArgumentsToModel();

		mediator.publish('modelSaved');
	},

	setArgumentsToModel: function () {
		_.each(this.$('.editableField'), function (selector) {
			this.model.set(selector.name, selector.value);
		}, this);	
	}

});